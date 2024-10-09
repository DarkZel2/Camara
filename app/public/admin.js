async function showSalones() {
  const response = await fetch("http://localhost:4500/api/data/showSalones");
  const resJson = await response.json();
  return resJson;
}

const salones = [];
function crearVisualizacion(data) {
  const tablaSalones = document.getElementById("tabla-salones");
  tablaSalones.innerHTML = `
    <tr>
      <th>ID Salón</th>
      <th>Nombre</th>
      <th>Descripción</th>
      <th></th>
    </tr>
  `;
  data.forEach((element) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${element.TarjetaID}</td>
      <td>${element.Name}</td>
      <td>${element.Description}</td>
      <td><a onclick="editarSalon(${element.TarjetaID})" class="btn-edit">Ver más</a></td>
    `;
    tablaSalones.appendChild(fila);
    salones.push(element);
    return salones;
  });
}

function editarSalon(id) {
  const infoSalon = document.querySelector(".info-salon");
  const salonElegido = salones.find((salon) => salon.TarjetaID === id);
  infoSalon.classList.remove("escondido");
  infoSalon.innerHTML = `
    <h2>${salonElegido.Name}</h2>
    <form id="update-info">
      <div class="name">
        <h4>Nombre:</h4>
        <input type="text" id="name" value="${salonElegido.Name}">
      </div>
      <div class="description">
        <h4>Descripción:</h4>
        <input type="text" id="description" value="${salonElegido.Description}">
      </div>
      <div class="imgs">
        <h4>Imágenes:</h4>
        <div>
          <input type="text" id="img1" value="${salonElegido.Img1}">
          <img src="${salonElegido.Img1}">
        </div>
        <div>
          <input type="text" id="img2" value="${salonElegido.Img2}">
          <img src="${salonElegido.Img2}">
        </div>
        <div>
          <input type="text" id="img3" value="${salonElegido.Img3}">
          <img src="${salonElegido.Img3}">
        </div>
        <div>
          <input type="text" id="img4" value="${salonElegido.Img4}">
          <img src="${salonElegido.Img4}">
        </div>
        <div>
          <input type="text" id="imgPlano" value="${salonElegido.ImgPlano}">
          <img class="plano" src="${salonElegido.ImgPlano}">
        </div>
      </div>
    </form>
    <div class="btn-save">
      <button type="submit" id="btn-save" form="update-info">Guardar</button>
    </div>
  `;

  document.getElementById("update-info").addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4500/api/update/salones", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        Id: salonElegido.TarjetaID,
        Name: e.target.name.value,
        Description: e.target.description.value,
        Img1: e.target.img1.value,
        Img2: e.target.img2.value,
        Img3: e.target.img3.value,
        Img4: e.target.img4.value,
        ImgPlano: e.target.imgPlano.value
      })
    });
    if (res.ok) {
      salones.splice(0, salones.length);
      showSalones().then((data) => {
        crearVisualizacion(data);
      });
      infoSalon.classList.add("escondido");
      alert("Cambios guardados con éxito.");
    } else {
      alert("Error al guardar los cambios.");
      return;
    }
  });
}

showSalones().then((data) => {
  crearVisualizacion(data);
});

function formatearPrecio(precio) {
  // Convertir el precio a un número flotante
  const numeroPrecio = parseFloat(precio);
  // Verificar si la conversión fue exitosa
  if (isNaN(numeroPrecio)) {
    return "Valor no válido";
  }
  // Formatear el número como precio en pesos colombianos
  return numeroPrecio.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });
}

async function getSolicitud() {
  const response = await fetch("http://localhost:4500/api/data/solicitud");
  const resJson = await response.json();
  return resJson;
}

const cotizaciones = [];
function solicitudes(data) {
  const tablaSolicitud = document.getElementById("tabla-solicitudes");
  tablaSolicitud.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Fecha</th>
      <th>Hora</th>
      <th>Salón</th>
      <th>Nombre Encargado</th>
      <th>Teléfono Encargado</th>
      <th>Servicios Solicitados</th>
      <th>Servicios Logísticos</th>
      <th>Estado</th>
      <th>Acciones</th>
      <th></th>
    </tr>
  `;
  data.forEach((element) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${element.CotizacionID}</td>
      <td>${element.Date}</td>
      <td>${element.HourI}-${element.HourE}</td>
      <td>${element.TarjetaName}</td>
      <td>${element.Name}</td>
      <td>${element.Phone}</td>
      <td>${element.Services}</td>
      <td>${element.Logistic}</td>
      <td>${element.Estado}</td>
      <td>
      <a onclick="aceptarSolicitud(${element.CotizacionID})" class="btn-accept">Aceptar</a>
      <a onclick="denegarSolicitud(${element.CotizacionID})" class="btn-decline">Rechazar</a>
      </td>
      <td><a onclick="infoSolicitud(${element.CotizacionID})" class="btn-edit">Ver más</a></td>
      `;
      tablaSolicitud.appendChild(fila);
      cotizaciones.push(element);
      return cotizaciones;
  });
}

async function aceptarSolicitud(id) {
  const res = await fetch("http://localhost:4500/api/update/estado", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      id: id,
      estado: "Aceptada"
    })
  });
  if (res.ok) {
    getSolicitud().then((data) => {
      solicitudes(data);
    });
    alert("Cambios guardados con éxito.");
  } else {
    alert("Error al guardar los cambios.");
    return;
  }
}

async function denegarSolicitud(id) {
  const res = await fetch("http://localhost:4500/api/update/estado", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      id: id,
      estado: "Denegada"
    })
  });
  if (res.ok) {
    getSolicitud().then((data) => {
      solicitudes(data);
    });
    alert("Cambios guardados con éxito.");
  } else {
    alert("Error al guardar los cambios.");
    return;
  }
}

function infoSolicitud(id) {
  const solicitudSeleccionada = cotizaciones.find(solicitud => solicitud.CotizacionID === id);
  const infoSolicitud = document.querySelector(".info-solicitud");
  infoSolicitud.classList.remove("escondido");
  infoSolicitud.innerHTML = `
    <h2>Cotización N°${solicitudSeleccionada.CotizacionID}</h2>
    <div class="more-info">
      <ul>
        <h3>Datos del Evento:</h3>
          <li>
            <h4>Nombre del Salón:</h4>
            <p>${solicitudSeleccionada.TarjetaName}</p>
          </li>
          <li>
            <h4>Fecha:</h4>
            <p>${solicitudSeleccionada.Date}</p>
          </li>
          <li>
            <h4>Hora:</h4>
            <p>${solicitudSeleccionada.HourI} - ${solicitudSeleccionada.HourE}</p>
          </li>
          <li>
            <h4>Número de Personas:</h4>
            <p>${solicitudSeleccionada.PeopleNum}</p>
          </li>
          <li>
            <h4>Tipo de Evento:</h4>
            <p>${solicitudSeleccionada.EventType}</p>
          </li>
          <li>
            <h4>Actividad:</h4>
            <p>${solicitudSeleccionada.Activity}</p>
          </li>
          <li>
            <h4>Caracter del Evento:</h4>
            <p>${solicitudSeleccionada.EventCharacter}</p>
          </li>
        </ul>
        <ul>
          <h3>Datos del Solicitante</h3>
          <li>
            <h4>ID del Usuario:</h4>
            <p>${solicitudSeleccionada.UsuarioID}</p>
          </li>
          <li>
            <h4>Nombre:</h4>
            <p>${solicitudSeleccionada.Name}</p>
          </li>
          <li>
            <h4>Celular:</h4>
            <p>${solicitudSeleccionada.Phone}</p>
          </li>
          <li>
            <h4>Correo Electrónico:</h4>
            <p>${solicitudSeleccionada.Email}</p>
          </li>
          <li>
            <h4>Tipo de Persona:</h4>
            <p>${solicitudSeleccionada.PersonType}</p>
          </li>
          <li>
            <h4>Nit:</h4>
            <p>${solicitudSeleccionada.Nit}</p>
          </li>
          <li>
            <h4>Razón Social:</h4>
            <p>${solicitudSeleccionada.Company}</p>
          </li>
          <li>
            <h4>Teléfono de la Empresa:</h4>
            <p>${solicitudSeleccionada.Tel}</p>
          </li>
          <li>
            <h4>Dirección:</h4>
            <p>${solicitudSeleccionada.Address}</p>
          </li>
          <li>
            <h4>Municipio:</h4>
            <p>${solicitudSeleccionada.Country}</p>
          </li>
          <li>
            <h4>Servicos Adicionales:</h4>
            <p>${solicitudSeleccionada.Services}</p>
          </li>
          <li>
            <h4>Servicios Logíticos:</h4>
            <p>${solicitudSeleccionada.Logistic}</p>
          </li>
          <li>
            <h4>Estado de la Solicitud:</h4>
            <p>${solicitudSeleccionada.Estado}</p>
          </li>
        </ul>
        <ul>
          <h3>Valor de la Cotización:</h3>
          <li>
            <h4>Valor total por los servicios seleccionados:</h4>
            <p>${formatearPrecio(solicitudSeleccionada.ServicesPrice)}</p>
          </li>
          <li>
            <h4>Valor total por el tiempo solicitado:</h4>
            <p>${formatearPrecio(solicitudSeleccionada.TimePrice)}</p>
          </li>
          <li>
            <h4>Valor total de la cotización:</h4>
            <p>${formatearPrecio(solicitudSeleccionada.TotalPrice)}</p>
          </li>
        </ul>
    </div>
  `
}

getSolicitud().then((data) => {
  solicitudes(data);
});

