const 
  calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector("#prev"),
  next = document.querySelector("#next"),
  todayBtn = document.querySelector(".today-btn"),
  gotoBtn = document.querySelector(".goto-btn"),
  dateInput = document.querySelector(".date-input"),
  eventDay = document.querySelector(".event-day"),
  eventDate = document.querySelector(".event-date"),
  eventsContainer = document.querySelector(".events"),
  addEventSubmit = document.querySelector(".add-event-btn");

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

//Array para los eventos

// const eventsArr = [
//   {
//     day: 15,
//     month: 5,
//     year: 2024,
//     events: [
//       {
//         title: "Event 1",
//         time: "10:00 AM - 10:30 AM",
//       },
//       {
//         title: "Event 2",
//         time: "11:00 AM",
//       },
//     ],
//   },
//   {
//     day: 18,
//     month: 5,
//     year: 2024,
//     events: [
//       {
//         title: "Event 1",
//         time: "10:00 AM",
//       },
//     ],
//   },
// ];

//Usamos un array vacio
let eventsArr = [];

getEvents();

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

    //Verificar si hay eventos en el dia transcurrido

    let event = false;
    eventsArr.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.month === month + 1 &&
        eventObj.year === year
      ) {
        //Si se encuentra un evento
        event = true;
      }
    })

    //Si el dia es hoy agregar "today"
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() && 
      month === new Date().getMonth()
    ) {

      activeDay = i;
      getActiveDay(i);
      updateEvents(i);

      //Si hay un evento agregar la clase "event"
      //Agregar "active" al iniciar

      if (event) {
        days += `<div class="day today active event" >${i}</div>`;
      } else {
        days += `<div class="day today active " >${i}</div>`;
      }
    } else {
      if (event) {
        days += `<div class="day event " >${i}</div>`;
      } else {
        days += `<div class="day " >${i}</div>`;
      }
    }
  }

  //Mes próximo 

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date " >${j}</div>`;
  }

  daysContainer.innerHTML = days; 
  //Agregar el listener  despues de inicializar el calendario
  addListener();
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

//Formato de la hora "desde"

addEventFrom.addEventListener("input", (e) => {
  //Remueve cualquier caracter que no sea un número
  addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
  //Si hay dos numeros enteros agrega un ":"
  if (addEventFrom.value.length === 2) {
    addEventFrom.value += ":";
  }
  //No admite mas de 5 caracteres
  if (addEventFrom.value.length > 5) {
    addEventFrom.value = addEventFrom.value.slice(0,5);
  }
  //Si backspace es presionado 
  if (e.inputType === "deleteContentBackward") {
    if (addEventFrom.value.length === 3) {
      addEventFrom.value = addEventFrom.value.slice(0, 2);
    }
  }
})

//Formato de la hora "hasta"

addEventTo.addEventListener("input", (e) => {
  //Remueve cualquier caracter que no sea un número
  addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
  //Si hay dos numeros enteros agrega un ":"
  if (addEventTo.value.length === 2) {
    addEventTo.value += ":";
  }
  //No admite mas de 5 caracteres
  if (addEventTo.value.length > 5) {
    addEventTo.value = addEventTo.value.slice(0,5);
  }
  //Si backspace es presionado 
  if (e.inputType === "deleteContentBackward") {
    if (addEventTo.value.length === 3) {
      addEventTo.value = addEventTo.value.slice(0, 2);
    }
  }
})

//Creamos la funcion para agregar

function addListener() {
  const days = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      //Cambia de dia transcurrido a dia activo
      activeDay = Number(e.target.innerHTML)

      //Llamar "getActiveDay" después del click
      getActiveDay(e.target.innerHTML);
      updateEvents(Number(e.target.innerHTML));

      //Remueve "active" del dia actual

      days.forEach((day) => {
        day.classList.remove("active");
      });

      //Si "click" en mas previo ir a mes previo y agregar "active"

      if (e.target.classList.contains("prev-date")){
        prevMonth();

        setTimeout(() => {
          //Selecciona todos los dias del mes
          const days = document.querySelectorAll(".day");
          //Después de ir a mes previo agregar el "active"
          days.forEach((day) => {
            if (
              !day.classList.contains("prev-date") && 
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active")
            }
          });
        }, 100);
        //Repetimos para el mes siguiente
      } else if (e.target.classList.contains("next-date")) {
        nextMonth();

        setTimeout(() => {
          //Selecciona todos los dias
          const days = document.querySelectorAll(".day");

          //Después de ir al mes siguiente agregamos la clase active"
          days.forEach((day) => {
            if (
              !day.classList.contains("next-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else {
        //Mismo proceso para los dias del mes actual
        e.target.classList.add("active");
      }
    });
  });
}

//Mostrar los eventos del dias activo y la fecha arriba

function getActiveDay(date) {
  const day = new Date(year, month, date);
  const dayName = day.toString().split(" ")[0];
  eventDay.innerHTML = dayName;
  eventDate.innerHTML = date + " " + months[month] + " " + year;
}

//Función para mostrar los eventos del dia transcurrido

function updateEvents(date) {
  let events = "";
  eventsArr.forEach((event) => {
    //Traer eventos solo del dia activo
    if (
      date === event.day &&
      month + 1 === event.month &&
      year === event.year
    ) {
      //Mostrar eventos en el documento

      event.events.forEach((event) => {
        events += `
        <div class="event">
          <div class="title">
            <i class="bi bi-circle-fill"></i>
            <h3 class="event-title">${event.title}</h3>
          </div>
          <div class="event-time">
            <span class="event-time">${event.time}</span>
          </div>
        </div>
        `;
      });
    }
  });

  //Si no encuentra nada

  if (events === "" ) {
    events = `
    <div class="no-event">
      <h3>Sin eventos para hoy</h3>
    </div>
    `
  }
  eventsContainer.innerHTML = events;
  //Guarda los eventos cuando se haga update
  saveEvents();
}

//Creamos la función para agregar eventos

addEventSubmit.addEventListener("click", () => {
  const eventTitle = addEventTitle.value;
  const eventTimeFrom = addEventFrom.value;
  const eventTimeTo = addEventTo.value;

  //Algunas validaciones

  if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
    alert("Por favor llenar los campos");
    return;
  }

  const timeFromArr = eventTimeFrom.split(":");
  const timeToArr = eventTimeTo.split(":");

  if (
    timeFromArr.length !== 2 ||
    timeToArr.length !== 2 ||
    timeFromArr[0] > 23 ||
    timeFromArr[1] > 59 ||
    timeToArr[0] > 23 ||
    timeToArr[1] > 59
  ) {
    alert("Formato de hora inválido")
  }

  const timeFrom = convertTime(eventTimeFrom);
  const timeTo = convertTime(eventTimeTo);

  const newEvent = {
    title: eventTitle,
    time: timeFrom + " - " + timeTo,
  }

  let eventAdded = false;

  //Revisar que event no esté vacío

  if (eventsArr.length > 0) {
    //Revisar si el dia transcursado no tiene ningún evento
    eventsArr.forEach((item) => {
      if (
        item.day === activeDay &&
        item.month === month + 1 &&
        item.year === year
      ) {
        item.events.push(newEvent);
        eventAdded = true;
      }
    });
  }

  //Si el array de eventos está vacío o el dia transcurrido no tiene eventos nuevos

  if (!eventAdded) {
    eventsArr.push({
      day: activeDay,
      month: month + 1,
      year: year,
      events: [newEvent]
    })
  }

  //removemos "active" y agregamos "event"
  addEventContainer.classList.remove("active")
  //Limpiamos los campos de texto
  addEventTitle.value = "";
  addEventFrom.value = "";
  addEventTo.value = "";

  //Mostrar evento creado

  updateEvents(activeDay);

  //Modificamos las clases para que nos indique que tenemos un evento creado

  const activeDayElem = document.querySelector(".day.active");
  if (!activeDayElem.classList.contains("event")) {
    activeDayElem.classList.add("event")
  }

});

function convertTime(time) {
  let timeArr = time.split(":");
  let timeHour = timeArr[0];
  let timeMin = timeArr[1];
  let timeFormat = timeHour >= 12 ? "PM" : "AM";
  timeHour = timeHour % 12 || 12;
  time = timeHour + ":" + timeMin + " " + timeFormat;
  return time;
}

//Creamos una función para remover los eventos

eventsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("event")) {
    const eventTitle = e.target.children[0].children[1].innerHTML;
    //Busca por titulo en el array y elimina
    eventsArr.forEach((event) => {
      if (
        event.day === activeDay &&
        event.month === month +1 &&
        event.year === year
      ) {
        event.events.forEach((item, index) => {
          if (item.title === eventTitle) {
            event.events.splice(index, 1);
          }
        });
        //Si no hay evento eliminamos el dia por completo
        if (event.events.length === 0) {
          eventsArr.splice(eventsArr.indexOf(event), 1);
          //Despues de esto removemos la clase
          const activeDayElem = document.querySelector(".day.active");
          if (activeDayElem.classList.contains("event")) {
            activeDayElem.classList.remove("event");
          }
        }
      }
    });
    //Recargamos los eventos
    updateEvents(activeDay);
  }
});

//Almacenaremos los eventos de forma local

function saveEvents() {
  localStorage.setItem("events", JSON.stringify(eventsArr));
}

function getEvents() {
  if (localStorage.getItem("events" === null)) {
    return;
  }

  eventsArr.push( ... JSON.parse(localStorage.getItem("events")));
}