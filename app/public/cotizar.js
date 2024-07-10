const social = document.getElementById("social");
const empresa = document.getElementById("empresa");
const mesas = document.getElementById("mesas");
const sonidoP = document.getElementById("sonido-pro");
const sonidoE = document.getElementById("sonido-ex");
const banderas = document.getElementById("banderas");
const maquina = document.getElementById("maquina");
const manteles = document.getElementById("manteles");

const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const options1 = document.querySelector("#options1");
const options2 = document.querySelector("#options2");
const contentSelect1 = document.querySelector(".content__select1");
const contentSelect2 = document.querySelector(".content__select2");
const hiddenInput1 = document.querySelector("#inputSelect1");
const hiddenInput2 = document.querySelector("#inputSelect2");

select1.addEventListener("click", () => {
  select1.classList.toggle("active");
  options1.classList.toggle("active");
});

select1.addEventListener("blur", () => {
  select1.classList.toggle("active");
  options1.classList.toggle("active");
});

select2.addEventListener("click", () => {
  select2.classList.toggle("active");
  options2.classList.toggle("active");
});

document.querySelectorAll(".option1").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    contentSelect1.innerHTML = e.currentTarget.innerHTML;
    select1.classList.toggle("active");
    options1.classList.toggle("active");
    hiddenInput1.value = e.currentTarget.querySelector(".title").innerText;
    validarHora();
  });
});

document.querySelectorAll(".option2").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    contentSelect2.innerHTML = e.currentTarget.innerHTML;
    select2.classList.toggle("active");
    options2.classList.toggle("active");
    hiddenInput2.value = e.currentTarget.querySelector(".title").innerText;
    validarHora();
  });
});

const salones =
{
  id: 1,
  name: "Auditorio Presidentes",
  capacity: 200,
  price: {
    hora: {
      week: 164000,
      weekend: 184000
    },
    horas: {
      afiliado: {
        week: 878000,
        weekend: 1010000
      },
      particular: {
        week: 1145000,
        weekend: 1145000
      }
    }
  },
  servicios: {
    sonidoPro: 500000,
    mesas: 4000,
    sonidoEx: 120000,
    banderas: 80000,
    maquina: 30000,
    manteles: 18000
  }
}

// Funciona para buscar el dia de la semana correcpondiente a una fecha
function traerDiaSemana(fecha) {
  let date = new Date(fecha);
  let day = date.getDay() + 1;

  switch (day) {
    case 1:
      return 'Lunes';
    case 2:
      return 'Martes';
    case 3:
      return 'Miércoles';
    case 4:
      return 'Jueves';
    case 5:
      return 'Viernes';
    case 6:
      return 'Sábado';
    case 7:
      return 'Domingo';
    default:
      return 'Fecha no encontrada.'
  }
}

const checks = document.querySelectorAll(".input");
const inputs = document.querySelectorAll(".formulario__input");
const radios = document.querySelectorAll(".formulario__radio");
const times = document.querySelectorAll(".formulario__time");
const dates = document.querySelectorAll(".formulario__date");
const buttom = document.getElementById("event-form");
const listaFecha = document.getElementById("dateList");
const listaHora = document.getElementById("timeList");
const listaTipoEvento = document.getElementById("typeEventList");
const listaServicios = document.getElementById("listaServicios");
const listaDatos = document.getElementById("listaDatos");
const fechaInicial = document.getElementById("Inicio");
const fechaFinal = document.getElementById("Fin");
const dayContainer = document.getElementById("day");
const todoElDia = document.getElementById("allDay");
const hourContainer = document.getElementById("hour");

todoElDia.addEventListener("click", () => {
  dayContainer.classList.toggle("none");
  hourContainer.classList.toggle("none");
});

// Funcionabilidad de la fecha
var valorDia = 0;
function verificarFecha(e) {

  var value = e.target.value;
  const diaEvento = traerDiaSemana(value);
  listaFecha.innerHTML = "";
  if (!todoElDia.checked) {
    var elemento = document.createElement('li');
    elemento.innerHTML = `Fecha del evento: ${diaEvento} ${value}`;
    listaFecha.appendChild(elemento);
  } else {
    if (fechaInicial.value !== "") {
      var elemento = document.createElement('li');
      elemento.innerHTML = `Fecha Inicial: ${traerDiaSemana(fechaInicial.value)} ${fechaInicial.value}`;
      listaFecha.appendChild(elemento);
    }
    if (fechaFinal.value !== "") {
      var elemento = document.createElement('li');
      elemento.innerHTML = `Fecha Final: ${traerDiaSemana(fechaFinal.value)} ${fechaFinal.value}`;
      listaFecha.appendChild(elemento);
    }
  }

  if (
    diaEvento === "Lunes" ||
    diaEvento === "Martes" ||
    diaEvento === "Miércoles" ||
    diaEvento === "Jueves"
  ) {
    valorDia = salones.price.hora.week;
  } else if (
    diaEvento === "Viernes" ||
    diaEvento === "Sábado"
  ) {
    valorDia = salones.price.hora.weekend;
  }
  return valorDia;
};

dates.forEach((date) => {
  date.addEventListener("change", verificarFecha)
})

// Funcionabilidad de la hora
var horaInicial = "";
var horaFinal = "";
const validarHora = () => {
  listaHora.innerHTML = "";
  if (hiddenInput1.value !== "") {
    var elemento = document.createElement('li');
    elemento.innerHTML = `Hora de Inicio: ${hiddenInput1.value}`;
    listaHora.appendChild(elemento);
    horaInicial = hiddenInput1.value;
  }
  if (hiddenInput2.value !== "") {
    var elemento = document.createElement('li');
    elemento.innerHTML = `Hora de Fin: ${hiddenInput2.value}`;
    listaHora.appendChild(elemento);
    horaFinal = hiddenInput2.value;
  }
  return horaInicial, horaFinal;
};

// Funcionabilidad de los checks de tipo de evento
const validarEvento = (e) => {
  listaTipoEvento.innerHTML = "";
  radios.forEach((e) => {
    if (e.checked == true) {
      var elemento = document.createElement('li');
      elemento.innerHTML = `Evento ${e.value}`;
      listaTipoEvento.appendChild(elemento);
    }
  })
};

radios.forEach((check) => {
  check.addEventListener('click', validarEvento)
});
// Funcionabilidad de lista checkbox de servicios
var vlrMesas = 0;
var vlrSonidoPro = 0;
var vlrSonidoEx = 0;
var vlrBanderas = 0;
var vlrMaquina = 0;
var vlrManteles = 0;
const validarChecks = (e) => {
  listaServicios.innerHTML = "";
  checks.forEach((e) => {
    if (e.checked == true) {
      var elemento = document.createElement('li');
      elemento.innerHTML = `${e.value}`;
      listaServicios.appendChild(elemento);
    }
  });
  if (e.target.name === "mesas" && e.target.checked) {
    vlrMesas = salones.servicios.mesas;
    return vlrMesas;
  }
  if (e.target.name === "sonidoPro" && e.target.checked) {
    vlrSonidoPro = salones.servicios.sonidoPro;
    return vlrSonidoPro;
  }
  if (e.target.name === "sonidoEx" && e.target.checked) {
    vlrSonidoEx = salones.servicios.sonidoEx;
    return vlrSonidoEx;
  }
  if (e.target.name === "banderas" && e.target.checked) {
    vlrBanderas = salones.servicios.banderas;
    return vlrBanderas;
  }
  if (e.target.name === "maquina" && e.target.checked) {
    vlrMaquina = salones.servicios.maquina;
    return vlrMaquina;
  }
  if (e.target.name === "manteles" && e.target.checked) {
    vlrManteles = salones.servicios.maquina;
    return vlrManteles;
  }
};

checks.forEach((check) => {
  check.addEventListener('click', validarChecks)
});

// Funcionalidades de los inputs de datos del encargado
const validarInputs = (e) => {
  listaDatos.innerHTML = "";
  inputs.forEach((e) => {
    if (e.value !== "") {
      var elemento = document.createElement('li');
      elemento.innerHTML = e.value;
      listaDatos.appendChild(elemento);
    }
  });
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarInputs);
  input.addEventListener('blur', validarInputs);
});


function revertTime(time12hr) {
  // Separar la cadena en horas, minutos y formato (AM/PM)
  let timeArr = time12hr.split(" ");
  let timeFormat = timeArr[1];
  // Separar las horas y minutos
  let [timeHourStr, timeMin] = timeArr[0].split(":");
  let timeHour = parseInt(timeHourStr); // Convertir la hora a número
  // Convertir de formato de 12 horas a 24 horas
  if (timeFormat === "AM") {
    // Si es "AM" y la hora es 12, convertirla a 0
    if (timeHour === 12) {
      timeHour = 0;
    }
  } else {
    // Si es "PM" y la hora no es 12, sumarle 12 para convertirla
    if (timeHour !== 12) {
      timeHour += 12;
    }
  }
  // Formar la cadena de tiempo en formato de 24 horas
  var time24hr = `${String(timeHour).padStart(2, '0')}${timeMin}`;
  // Retornar el tiempo en formato de 24 horas
  return time24hr;
}

const btnCalcular = document.getElementById("btn-calcular");
const mostrarValorUso = document.getElementById("valorUso");
btnCalcular.addEventListener("click", totalTiempoUso);
btnCalcular.addEventListener("click", totalValorServicios);
btnCalcular.addEventListener("click", totalSalon);

var valorTotal = 0;
function totalTiempoUso() {
  var hrRevertInicial = revertTime(horaInicial);
  var hrRevertFinal = revertTime(horaFinal);
  var cantHoras = 0;
  const lapsoTiempo = (hr1, hr2) => {
    const rest = hr1 - hr2;
    const result = rest / -100;
    cantHoras = Number(result);
    return cantHoras;
  }
  lapsoTiempo(hrRevertInicial, hrRevertFinal);
  valorTotal = valorDia * cantHoras;
  // Mostrar valor en el DOOM
  mostrarValorUso.innerHTML = "";
  var elemento = document.createElement('li');
  elemento.innerHTML = `$${valorTotal}`;
  mostrarValorUso.appendChild(elemento);
  return valorTotal;
}

const mostrarValorServicios = document.getElementById("valorServicios");

var totalServicios = 0;
function totalValorServicios() {
  totalServicios = vlrBanderas + vlrManteles + vlrMaquina + vlrMesas + vlrSonidoEx + vlrSonidoPro;
  mostrarValorServicios.innerHTML = "";
  var elemento = document.createElement('li');
  elemento.innerHTML = `$${totalServicios}`;
  mostrarValorServicios.appendChild(elemento);
  return totalServicios;
}

const mostrarValorTotal = document.getElementById("valorTotal");
function totalSalon() {
  const valorTotalSalon = valorTotal + totalServicios;
  mostrarValorTotal.innerHTML = "";
  var elemento = document.createElement('li');
  elemento.innerHTML = `$${valorTotalSalon}`;
  mostrarValorTotal.appendChild(elemento);
}


buttom.addEventListener("submit", async (e) => {
  e.preventDefault();


  // const res = await fetch("http://localhost:4500/api/cotizar", {
  //   method:"POST",
  //   headers:{
  //     "content-Type" : "application/json"
  //   },
  //   body: JSON.stringify({
  //     
  //   })
  // });
})
