async function showSalones() {
  const response = await fetch("http://localhost:4500/api/data/showSalones");
  const resJson = await response.json();
  return resJson;
}

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
      <td><a href="" class="btn-edit">Editar</a></td>
    `;
    tablaSalones.appendChild(fila)
  });
}

showSalones().then((data) => {
  crearVisualizacion(data);
});

async function getSolicitud() {
  const response = await fetch("http://localhost:4500/api/data/solicitud");
  const resJson = await response.json();
  return resJson;
}

function solicitudes(data) {

  const tablaSolicitud = document.getElementsById("tabla-solicitudes");
  console.log(data)
}

getSolicitud().then(data => {
  solicitudes(data)
});
