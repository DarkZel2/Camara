const 
  calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector("#prev"),
  next = document.querySelector("#next"),
  todayBtn = document.querySelector(".today-btn")
  gotoBtn = document.querySelector(".goto-btn")
  dateInput = document.querySelector(".date-input")

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]

//Función para agregar dias

function initCalendar() {
  //Traerá los dias del mes anterior, todos los dias del mes presente y los dias del siguiente mes
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  //Mes del año en el top del calendario

  date.innerHTML = months[month] + " " + year;

  //Agregando dias en el DOM

  let days = "";

  //Dias del mes previo

  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date " >${prevDays - x + 1}</div>`;
  }

  //Mes actual

  for (let i = 1; i <= lastDate; i++ ) {
    //Si el dia es hoy agregar "today"
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() && 
      month === new Date().getMonth()
    ) {
      days += `<div class="day today" >${i}</div>`;
    } else {
      days += `<div class="day " >${i}</div>`;
    }
  }

  //Mes próximo 

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date " >${j}</div>`;
  }

  daysContainer.innerHTML = days; 
}

initCalendar();

//Mes previo 

function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

//Mes siguiente

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

//Agregar evento de paginación de los meses 

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

//Agregamos las funcionalidades de ir a hoy "today-btn" y de ir a "goto-btn"

todayBtn.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  initCalendar();
});

dateInput.addEventListener("input", (e) => {
  //Solo numeros, remueve los demás caracteres
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
  if (dateInput.value.length === 2) {
    //Agrega un slash cuando hayan dos numero en el campo de texto
    dateInput.value += "/";
  }
  if (dateInput.value.length > 7) {
    //No puede agregar mas de 7 caracteres
    dateInput.value = dateInput.value.slice(0, 7);
  }
  //Si backspace es presionado 
  if (e.inputType === "deleteContentBackward") {
    if (dateInput.value.length === 3) {
      dateInput.value = dateInput.value.slice(0, 2);
    }
  }
});

gotoBtn.addEventListener("click", gotoDate);

//Funcion para buscar una fecha

function gotoDate() {
  const dateArr = dateInput.value.split("/");
  if (dateArr.length === 2) {
    if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
      month = dateArr[0] - 1;
      year  = dateArr[1];
      initCalendar();
      return;
    }
  }
  //Si la fecha es inválida
  alert("Fecha inválida")
}

//Agregar pestaña de eventos

const addEventBtn = document.querySelector(".add-event"),
  addEventContainer = document.querySelector(".add-event-wrapper"),
  addEventCloseBtn = document.querySelector("#close"),
  addEventTitle = document.querySelector(".event-name"),
  addEventFrom = document.querySelector(".event-time-from"),
  addEventTo = document.querySelector(".event-time-to");

addEventBtn.addEventListener("click", () => {
  addEventContainer.classList.add("active");
})
addEventCloseBtn.addEventListener("click", () => {
  addEventContainer.classList.remove("active");
})

document.addEventListener("click", (e) => {
  if (e.target != addEventBtn && !addEventContainer.contains(e.target)) {
    addEventContainer.classList.remove("active");
  }
});

//Permite hasta 50 caracteres en el titulo

addEventTitle.addEventListener("input", (e) => {
  addEventTitle.value = addEventTitle.value.slice(0, 50);
});

//Formato de la hore "desde" y "hasta"

addEventFrom.addEventListener("input", (e) => {
  //Remueve cualquier caracter que no sea un número
  addEventFrom.value = addEventFrom.value.replace(/[^0-9]/g, "");
  //Si hay dos numeros enteros agrega un ":"
  if (addEventFrom.value.length === 2) {
    addEventFrom.value += ":";
  }
  //No admite mas de 5 caracteres
  if (addEventFrom.value.length > 5) {
    addEventFrom.value = addEventFrom.value.slice(0,5);
  }
})