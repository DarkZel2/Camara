async function getSalones() {
  const res = await fetch("http://localhost:4500/api/card/salones");
  const resJson = await res.json();
  return resJson;
};

function crearTarjetasSalones(salon) {
  const contenedorTarjetas = document.querySelector(".salones");
  salon.forEach(element => {
    const nuevoSalon = document.createElement("div");
    nuevoSalon.classList = "salon";
    nuevoSalon.innerHTML = `
		<div class="card-img">
          <ul>
            <li>
              <img src="${element.img1}">
            </li>
            <li>
              <img src="${element.img2}">
            </li>
            <li>
              <img src="${element.img3}">
            </li>
            <li>
              <img src="${element.img4}">
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="card-head">
            <h2>${element.name}</h2>
          </div>
          <div class="card-main">
            <p>${element.description}</p>
          </div>
          <div class="card-footer">
            <a href="">Recorrido</a>
            <a href="/api/salon/index" onclick="enviarId(${element.id})">Ver más</a>
          </div>
        </div>
		`;
    contenedorTarjetas.appendChild(nuevoSalon);
  });
}

getSalones().then(salones => {
  crearTarjetasSalones(salones)
});

function enviarId(dato) {
  console.log(dato);
  async function getInfoSalon() {
    const res = await fetch("http://localhost:4500/api/info/salones");
    const resJson = await res.json();
    return resJson;
  };

  const title = document.getElementById("title");
  const listaCapacidad = document.getElementById("capacityList");
  const listaServicios = document.getElementById("servicesList");
  const listaAdicionales = document.getElementById("aditionalList");

  async function mostrarDatosSalon(datos) {
    datos.forEach(data => {
      if (data.id === dato) {
        title.innerText = data.name;
        listaCapacidad.innerHTML = `
            <li><img src="/img/icons/social">Eventos Sociales: ${data.caracteristicas.capacidad.sociales} </li>
            <li><img src="/img/icons/empresarial">Eventos Empresariales: ${data.caracteristicas.capacidad.empresarial}</li>
          `;
        const servicios = data.caracteristicas.servicios;
        servicios.forEach(servicio => {
          const nuevoServicio = document.createElement("li");
          nuevoServicio.innerHTML = servicio;
          listaServicios.appendChild(nuevoServicio);
          return;
        });

        const adicionales = data.caracteristicas.adicionales;
        adicionales.forEach(adicional => {
          const nueva = document.createElement("li");
          nueva.innerHTML = adicional;
          listaAdicionales.appendChild(nueva);
          return;
        });
      } else {
        console.log("Id no encontrado");
      }
    });
  };

  getInfoSalon().then(datos => {
    mostrarDatosSalon(datos)
  });
};