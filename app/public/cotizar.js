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

// Limitamos las horas de 1 a 12
var hourSelect = document.getElementById("hours");
for (var i = 1; i <= 12; i++) {
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

// Limitamos las horas de 1 a 12
var hourSelect = document.getElementById("hours2");
for (var i = 1; i <= 12; i++) {
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
});
// Validación del tipo de Actividad y Otras actividades
const activitySelect = document.getElementById("activity");
const otherInput = document.querySelector(".other");
const others = document.getElementById("others");

const validarActividad = (e) => {
  const result = e.target.value;
  if (result === "") {
  } else {
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
});
// Validación del campo Nombre
const inputName = document.getElementById("name");

inputName.addEventListener("input", (e) => {
  const value = e.target.value;
  const valid = value.replace(/[^a-zA-Z\s]/g, "");
  e.target.value = valid.slice(0, 30);
});
// Validación del campo Teléfono
const inputPhone = document.getElementById("phone");

inputPhone.addEventListener("input", (e) => {
  const value = e.target.value;
  const valid = value.replace(/[^0-9+]/g, "");
  e.target.value = valid.slice(0, 10);
});
// Validación del campo Email
const inputEmail = document.getElementById("email");

inputEmail.addEventListener("input", (e) => {
  const value = e.target.value;
  const valid = value.replace(/[^a-zA-Z@0-9.]/g, "");
  e.target.value = valid.slice(0, 40);
});
// Validación de los botones Juridica y Natual
const radios = document.querySelectorAll("#radio");
const infoCompany = document.querySelector(".company");

const validarRadios = (e) => {
  radios.forEach((e) => {
    const result = e.value;
    if (e.checked === true) {
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
// Creación de contenedores de servicios y validación
async function getAdicionales() {
  const res = await fetch("http://localhost:4500/api/data/cotizar/servicios");
  const resJson = await res.json();
  return resJson;
}

const adicionalesContainer = document.querySelector(".services");

function crearServicios(data) {
  data.forEach((element) => {
    const service = document.createElement("label");
    service.innerHTML = `
    <input type="checkbox" class="checkbox" value="${element.InterPrice}">
    ${element.Description}
    `;
    adicionalesContainer.appendChild(service);
  });
}
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
const serviceCheck = [];
const servicesList = document.getElementById("servicesPrice");
const priceContainer = document.getElementById("usedPrice");
const totalList = document.getElementById("totalPrice");
let valorTiempoSalon = 0;
let valorHoraDia = 0;
let suma = 0;
let totalPrice = 0;
let hri = "";
let hrf = "";
function calcularCotizacion() {
  const horaI = document.getElementById("hours").value;
  const minutosI = document.getElementById("minutes").value;
  const horarioI = document.getElementById("horario").value;
  const horaF = document.getElementById("hours2").value;
  const minutosF = document.getElementById("minutes2").value;
  const horarioF = document.getElementById("horario2").value;
  hri = timeFormat(horaI, minutosI, horarioI);
  hrf = timeFormat(horaF, minutosF, horarioF);
  const init = revertTime(hri).split(":");
  const end = revertTime(hrf).split(":");
  suma = 0;
  const date = document.getElementById("date").value;
  const diaSemana = traerDiaSemana(date);
  const checkServices = document.querySelectorAll(".checkbox");

  // Calcular tiempo de uso en horas
  const inicio = new Date(date);
  inicio.setHours(init[0], init[1]);

  const fin = new Date(date);
  fin.setHours(end[0], end[1]);

  let tiempoUsoHoras = (fin - inicio) / (1000 * 60 * 60); // Convertir a horas
  if (tiempoUsoHoras < 0) {
    tiempoUsoHoras += 24;
  }

  // Función para obtener precios por hora y día de la semana desde la base de datos
  async function obtenerPreciosHora() {
    const respuesta = await fetch(
      "http://localhost:4500/api/data/cotizar/hora"
    );
    const preciosHora = await respuesta.json();
    return preciosHora;
  }

  obtenerPreciosHora().then((data) => {
    darValor(data);
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

  function darValor(data) {
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
      return valorTiempoSalon;
    });
    
    serviceCheck.splice(0, serviceCheck.length);
    checkServices.forEach((check) => {
      if (check.checked) {
        // Sumar valor del checkbox seleccionado
        suma += parseInt(check.value);
        serviceCheck.push(check.value);
      }
      return serviceCheck;
    });
    servicesList.innerHTML = `
      <li>${formatearPrecio(suma)}</li>
    `
    totalPrice = suma + valorTiempoSalon;
    totalList.innerHTML = `
      <li>${formatearPrecio(totalPrice)}</li>
    `;
  };
  return hri, hrf;
};


function limpiarCotizacion() {
  priceContainer.innerHTML = ""
  servicesList.innerHTML = ""
  totalList.innerHTML = "";
}

document.getElementById("event-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:4500/api/cotizar", {
    method: "POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      date: e.target.date.value,
      initTime: hri,
      endTime: hrf,
      peopleNum: e.target.number.value,
      eventType: e.target.eventType.value,
      activity: e.target.activity.value,
      others: e.target.others.value,
      eventCharac: e.target.eventCharacter.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      personType: e.target.radio.value,
      nit: e.target.nit.value,
      reason: e.target.reason.value,
      tel: e.target.tel.value,
      address: e.target.address.value,
      country: e.target.country.value,
      services: serviceCheck,
      logistic: e.target.logistics.value,
      timePrice: valorTiempoSalon,
      servicePrice: suma,
      totalPrice: totalPrice
    })
  });
  if (!res.ok) {
    return;
  }
  const resJson = await res.json();
  if (resJson.redirect) {
    window.location.href = resJson.redirect;
  }
});