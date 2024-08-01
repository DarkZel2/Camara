async function getInfoSalon() {
	const res = await fetch("http://localhost:4500/api/info/salones");
	const resJson = await res.json();
	return resJson;
};

const title = document.getElementById("title");
const listaCapacidad = document.getElementById("capacityList");
const listaServicios = document.getElementById("servicesList");
const listaAdicionales = document.getElementById("aditionalList");

function mostrarDatosSalon(datos) {
  datos.forEach(data => {
    title.innerText = `${data.name}`
    listaCapacidad.innerHTML = `
      <li><img src="/img/icons/social">Eventos Sociales: ${data.caracteristicas.capacidad.sociales} </li>
      <li><img src="/img/icons/empresarial">Eventos Empresariales: ${data.caracteristicas.capacidad.empresarial}</li>
    `
    const servicios = data.caracteristicas.servicios;
    servicios.forEach(servicio => {
      const nuevoServicio = document.createElement("li");
      nuevoServicio.innerHTML = servicio
      listaServicios.appendChild(nuevoServicio);
      return
    });

    const adicionales = data.caracteristicas.adicionales;
    adicionales.forEach(adicional => {
      const nueva = document.createElement("li");
      nueva.innerHTML = adicional
      listaAdicionales.appendChild(nueva);
      return
    });

  });
};

getInfoSalon().then(datos => {
	mostrarDatosSalon(datos)
});