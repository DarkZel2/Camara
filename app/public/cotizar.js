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
      return "Miercoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sabado";
    case 7:
      return "Domingo";
    default:
      return "Fecha no encontrada.";
  }
}
// Creacion de las Opciones para la hora
function createOption(value, text) {
  var option = document.createElement("option");
  option.text = text;
  option.value = value;
  return option;
}

// Limitamos las horas de 8 a 18
var hourSelect = document.getElementById("hours");
for (var i = 0; i <= 12; i++) {
  hourSelect.add(createOption(i, i));
}

// Configuramos el paso en 30 minutos
var minutesSelect = document.getElementById("minutes");
for (var i = 0; i < 60; i += 30) {
  minutesSelect.add(createOption(i, i));
}

// Configuramos el paso en AM PM
var horarioSelect = document.getElementById("horario");
horarioSelect.add(createOption("AM", "AM"));
horarioSelect.add(createOption("PM", "PM"));

// Limitamos las horas de 8 a 18
var hourSelect = document.getElementById("hours2");
for (var i = 0; i <= 12; i++) {
  hourSelect.add(createOption(i, i));
}

// Configuramos el paso en 30 minutos
var minutesSelect = document.getElementById("minutes2");
for (var i = 0; i < 60; i += 30) {
  minutesSelect.add(createOption(i, i));
}

// Configuramos el paso en AM PM
var horarioSelect = document.getElementById("horario2");
horarioSelect.add(createOption("AM", "AM"));
horarioSelect.add(createOption("PM", "PM"));
// Validación del Número de Personas
const nPersonas = document.getElementById("number");

nPersonas.addEventListener("input", (e) => {
  const value = e.target.value;
  const validPhone = value.replace(/[^0-9]/g, "");
  e.target.value = validPhone.slice(0, 5);
  console.log(value);
});
// Validación del tipo de Evento
const tipoEvento = document.getElementById("event-type");

const validarEvento = (e) => {
  console.log(e.target.value);
};

tipoEvento.addEventListener("change", validarEvento);
// Validación del tipo de Actividad y Otras actividades
const activitySelect = document.getElementById("activity");
const otherInput = document.querySelector(".other");
const others = document.getElementById("others");

const validarActividad = (e) => {
  const result = e.target.value;
  if (result === "") {
  } else {
    console.log(result);
    if (result === "Otros") {
      otherInput.classList.add("visible");
    } else {
      otherInput.classList.remove("visible");
    }
  }
};

activitySelect.addEventListener("change", validarActividad);
others.addEventListener("input", (e) => {
  const value = e.target.value;
  validValue = value.replace(/[^A-Za-z\s]/g, "");
  e.target.value = validValue.slice(0, 20);
  console.log(value);
});
// Validación del campo de Caracter del Evento
const eventCharacter = document.getElementById("event-character");

const validarCaracterEvento = (e) => {
  console.log(e.target.value);
};

eventCharacter.addEventListener("change", validarCaracterEvento);
// Validación del campo Nombre
const inputName = document.getElementById("name");

inputName.addEventListener("input", (e) => {
  const value = e.target.value;
  const valid = value.replace(/[^a-zA-Z\s]/g, "");
  e.target.value = valid.slice(0, 30);
  console.log(value);
});
// Validación del campo Teléfono
const inputPhone = document.getElementById("phone");

inputPhone.addEventListener("input", (e) => {
  const value = e.target.value;
  const valid = value.replace(/[^0-9+]/g, "");
  e.target.value = valid.slice(0, 10);
  console.log(value);
});
// Validación del campo Email
const inputEmail = document.getElementById("email");

inputEmail.addEventListener("input", (e) => {
  const value = e.target.value;
  const valid = value.replace(/[^a-zA-Z@0-9.]/g, "");
  e.target.value = valid.slice(0, 40);
  console.log(value);
});
// Validación de los botones Juridica y Natual
const radios = document.querySelectorAll("#radio");
const infoCompany = document.querySelector(".company");

const validarRadios = (e) => {
  radios.forEach((e) => {
    const result = e.value;
    if (e.checked === true) {
      console.log(result);
      if (result === "Persona Jurídica") {
        infoCompany.classList.add("visible");
      } else {
        infoCompany.classList.remove("visible");
      }
    }
  });
};

radios.forEach((check) => {
  check.addEventListener("click", validarRadios);
});
// Validación de la informacion de la Empresa
const inputNit = document.getElementById("nit");
const inputRazon = document.getElementById("razon");
const inputTel = document.getElementById("tel");

const validarNit = (e) => {
  console.log(e.target.value);
};
const validarRazon = (e) => {
  console.log(e.target.value);
};
const validarTel = (e) => {
  console.log(e.target.value);
};

inputNit.addEventListener("change", validarNit);
inputRazon.addEventListener("change", validarRazon);
inputTel.addEventListener("change", validarTel);
// Validación de la Dirección
const inputAddress = document.getElementById("address");

const validarDireccion = (e) => {
  console.log(e.target.value);
};

inputAddress.addEventListener("change", validarDireccion);
// Validación de el Municipio
const inputCountry = document.getElementById("country");

const validarMunicipio = (e) => {
  console.log(e.target.value);
};

inputCountry.addEventListener("change", validarMunicipio);
// Creación de contenedores de servicios y validación
async function getAdicionales() {
  const res = await fetch("http://localhost:4500/api/data/adicionales");
  const resJson = await res.json();
  return resJson;
}

const adicionalesContainer = document.querySelector(".services");

function crearServicios(data) {
  data.forEach((element) => {
    const service = document.createElement("label");
    service.innerHTML = `
    <input type="checkbox" class="service-checkbox" value="${element.Description}">
    ${element.Description}
    `;
    adicionalesContainer.appendChild(service);
  });

  // Ahora que los checkboxes están en el DOM, selecciona y agrega los eventos
  const checkServices = document.querySelectorAll(".service-checkbox");
  checkServices.forEach((check) => {
    check.addEventListener("click", validarServicios);
  });
}

const validarServicios = (e) => {
  // Mostrar el valor del checkbox seleccionado
  if (e.target.checked) {
    console.log(`Seleccionado: ${e.target.value}`);
  }
};

// Llamada a la función para obtener y mostrar los servicios
getAdicionales().then((data) => {
  crearServicios(data);
});
// Validación de Servicios Logísticos
const checkLogist = document.getElementById("logistics");

const validarLogistica = (e) => {
  const result = e.target.checked;
  if (result) {
    console.log("Servicios ON");
  } else {
    console.log("Servicios OFF");
  }
};

checkLogist.addEventListener("click", validarLogistica);
// Función para convertir el tiempo en formato 24 hrs
function revertTime(time) {
  let timeArr = time.split(" ");
  let hourMin = timeArr[0].split(":");
  let hour = parseInt(hourMin[0]);
  let min = hourMin[1];
  let timeFormat = timeArr[1];

  if (timeFormat === "PM" && hour < 12) {
    hour += 12;
  } else if (timeFormat === "AM" && hour === 12) {
    hour = 0;
  }

  // Aseguramos que el formato sea HH:MM
  return (hour < 10 ? "0" : "") + hour + ":" + min;
}
// Función para crear una cadena de texto con los tres datos de la fecha
function timeFormat(hour, minutes, hourHand) {
  // Validar los minutos
  if (minutes < 0 || minutes > 59) {
    return "Minutos no válidos";
  }

  // Asegurarse de que los minutos tengan dos dígitos
  const formattedMinutes = minutes.toString().padStart(2, "0");

  // Retornar el tiempo formateado
  return `${hour}:${formattedMinutes} ${hourHand}`;
}

// Funciones para calcular el valor de la cotización, enviar cotizacion realizada y limpiar cotización
function calcularCotizacion() {
  const horaI = document.getElementById("hours").value;
  const minutosI = document.getElementById("minutes").value;
  const horarioI = document.getElementById("horario").value;
  const horaF = document.getElementById("hours2").value;
  const minutosF = document.getElementById("minutes2").value;
  const horarioF = document.getElementById("horario2").value;
  const date = document.getElementById("date").value;
  const diaSemana = traerDiaSemana(date);

  const init = revertTime(timeFormat(horaI, minutosI, horarioI)).split(":");
  const end = revertTime(timeFormat(horaF, minutosF, horarioF)).split(":");

  // Calcular tiempo de uso en horas
  const inicio = new Date(date);
  inicio.setHours(init[0], init[1]);

  const fin = new Date(date);
  fin.setHours(end[0], end[1]);

  const tiempoUsoHoras = (fin - inicio) / (1000 * 60 * 60); // Convertir a horas

  // Función para obtener precios por hora y día de la semana desde la base de datos
  async function obtenerPreciosHora() {
    const respuesta = await fetch(
      "http://localhost:4500/api/data/cotizar/hora"
    );
    const preciosHora = await respuesta.json();
    return preciosHora;
  }

  obtenerPreciosHora().then((data) => {
    darValorDia(data);
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

  function darValorDia(data) {
    const priceContainer = document.getElementById("usedPrice");
    let valorHoraDia = "";
    let valorTiempoSalon = "";
    data.forEach((e) => {
      if (
        "Lunes" === diaSemana ||
        "Martes" === diaSemana ||
        "Miercoles" === diaSemana ||
        "Jueves" === diaSemana
      ) {
        valorHoraDia = e.Lunes;
        valorTiempoSalon = valorHoraDia * tiempoUsoHoras;
        priceContainer.innerHTML = `
          <li>${formatearPrecio(valorTiempoSalon)}</li>
        `;
      } else if (
        "Viernes" === diaSemana ||
        "Sabado" === diaSemana ||
        "Domingo" === diaSemana
      ) {
        valorHoraDia = e.Viernes;
        valorTiempoSalon = valorHoraDia * tiempoUsoHoras;
        priceContainer.innerHTML = `
          <li>${formatearPrecio(valorTiempoSalon)}</li>
        `;
      }
    });
  }
}

function limpiarCotizacion() {
  console.log("Limpio");
}

// // URL de la API que devuelve los precios por hora y día de la semana
// const urlPreciosHora = "http://localhost:4500/api/data/cotizar/hora";

// // URL de la API que devuelve los precios de servicios adicionales
// const urlPreciosServicios = "http://localhost:4500/api/data/cotizar/servicios";

//   } catch (error) {
//     console.error("Error al obtener precios por hora:", error);
//   }
// }

// // Función para obtener precios de servicios adicionales desde la base de datos
// async function obtenerPreciosServicios() {
//   try {
//     const respuesta = await fetch(urlPreciosServicios);
//     const preciosServicios = await respuesta.json();
//     return preciosServicios;
//   } catch (error) {
//     console.error("Error al obtener precios de servicios:", error);
//   }
// }

// // Función para calcular la cotización
// async function calcularCotizacion(horas, dia, servicios) {
//   const preciosHora = await obtenerPreciosHora();
//   const preciosServicios = await obtenerPreciosServicios();

//   let subtotal = horas * preciosHora[dia];
//   let totalServicios = servicios.reduce(
//     (acum, servicio) => acum + preciosServicios[servicio],
//     0
//   );
//   return subtotal + totalServicios;
// }
