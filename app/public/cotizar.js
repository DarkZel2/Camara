// Funciona para buscar el dia de la semana correcpondiente a una fecha
function traerDiaSemana(fecha) {
  let date = new Date(fecha);
  let day = date.getDay() + 1;

  switch (day) {
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miércoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sábado";
    case 7:
      return "Domingo";
    default:
      return "Fecha no encontrada.";
  }
}

async function getAdicionales() {
  const res = await fetch("http://localhost:4500/api/data/adicionales");
  const resJson = await res.json();
  return resJson;
}

// Agregar eventos distintos eventos sociales

const radios = document.querySelectorAll("#social, #empresa");
const subSocial = document.getElementById("subSocial");
const listaTipoEvento = document.getElementById("typeEventList");
const subRadios = document.getElementsByName("subtipo");

const validarEvento = (e) => {
  listaTipoEvento.innerHTML = "";
  radios.forEach((e) => {
    if (e.checked === true) {
      var elemento = document.createElement('li');
      if (e.value === "Social") {
        elemento.innerHTML = `Evento ${e.value} - `;
        subSocial.classList.add("more");
      } else if (e.value === "Empresarial") {
        subSocial.classList.remove("more")
        elemento.innerHTML = `Evento ${e.value}`;
      }
      listaTipoEvento.appendChild(elemento);
    }
  })
};

radios.forEach((check) => {
  check.addEventListener('click', validarEvento)
});

const adicionalesContainer = document.querySelector(".add-serv");

function crearServicios(data) {
  const title = document.createElement("h4");
  title.innerHTML = "Servicios adicionales:";
  adicionalesContainer.appendChild(title);
  data.forEach((element) => {
    const formulario = document.createElement("div");
    formulario.classList = "formulario__grupo";
    formulario.innerHTML = `
      <label class="formulario__label">
        <input class="formulario__checkbox input" type="checkbox" name="mesas" id="mesas" value="${element.Description}">
        ${element.Description}
      </label>
    `
    adicionalesContainer.appendChild(formulario);
  });
}

getAdicionales().then((data) => {
  crearServicios(data);
});

{
  /* 
  
*/
}

// URL de la API que devuelve los precios por hora y día de la semana
const urlPreciosHora = "http://localhost:4500/api/data/cotizar/servicios";

// URL de la API que devuelve los precios de servicios adicionales
const urlPreciosServicios = "http://localhost:4500/api/data/cotizar/servicios";

// Función para obtener precios por hora y día de la semana desde la base de datos
async function obtenerPreciosHora() {
  try {
    const respuesta = await fetch(urlPreciosHora);
    const preciosHora = await respuesta.json();
    return preciosHora;
  } catch (error) {
    console.error("Error al obtener precios por hora:", error);
  }
}

// Función para obtener precios de servicios adicionales desde la base de datos
async function obtenerPreciosServicios() {
  try {
    const respuesta = await fetch(urlPreciosServicios);
    const preciosServicios = await respuesta.json();
    return preciosServicios;
  } catch (error) {
    console.error("Error al obtener precios de servicios:", error);
  }
}

// Función para calcular la cotización
async function calcularCotizacion(horas, dia, servicios) {
  const preciosHora = await obtenerPreciosHora();
  const preciosServicios = await obtenerPreciosServicios();

  let subtotal = horas * preciosHora[dia];
  let totalServicios = servicios.reduce(
    (acum, servicio) => acum + preciosServicios[servicio],
    0
  );
  return subtotal + totalServicios;
}

// Ejemplo de uso
let horas = 5;
let dia = "viernes";
let servicios = ["servicio1", "servicio3"];
calcularCotizacion(horas, dia, servicios).then((cotizacion) => {
  console.log("La cotización es: $" + cotizacion);
});
