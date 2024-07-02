const social = document.getElementById("social");
const empresa = document.getElementById("empresa");
const mesas = document.getElementById("mesas");
const sonidoP = document.getElementById("sonido-pro");
const sonidoE = document.getElementById("sonido-ex");
const banderas = document.getElementById("banderas");
const maquina = document.getElementById("maquina");
const manteles = document.getElementById("manteles");


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

const checks = document.querySelectorAll(".formulario__checkbox");
const inputs = document.querySelectorAll(".formulario__input");
const radios = document.querySelectorAll(".formulario__radio");
const times = document.querySelectorAll(".formulario__time");
const date = document.querySelectorAll(".formulario__date");
const buttom = document.getElementById("event-form");
const listaFecha = document.getElementById("dateList");
const listaHora = document.getElementById("timeList");
const listaTipoEvento = document.getElementById("typeEventList");
const listaServicios = document.getElementById("listaServicios");
const listaDatos = document.getElementById("listaDatos");

// Funcionabilidad de la fecha
const validarFecha = (e) => {
  const diaEvento = traerDiaSemana(e.target.value);
  listaFecha.innerHTML = "";
  if (e.target.value !== "") {
    var elemento = document.createElement('li');
    elemento.innerHTML = `${diaEvento} ${e.target.value}`;
    listaFecha.appendChild(elemento);
  };

  var valor = "";
  if (
    diaEvento === "Lunes" ||
    diaEvento === "Martes" ||
    diaEvento === "Miércoles" ||
    diaEvento === "Jueves"
  ) {
    valor = salones.price.hora.week;
  } else if (
    diaEvento === "Viernes" ||
    diaEvento === "Sábado"
  ) {
    valor = salones.price.hora.weekend;
  }
  return valor;
};

date.forEach((date) => {
  date.addEventListener('blur', validarFecha)
});
// Funcionabilidad de la hora
const validarHora = (e) => {
  listaHora.innerHTML = "";
  times.forEach((e) => {
    if (e.value !== "") {
      var elemento = document.createElement('li');
      elemento.innerHTML = `Hora de ${e.id} ${e.value}`;
      listaHora.appendChild(elemento);
    }
  })

  console.log(e.target.value)
};

times.forEach((time) => {
  time.addEventListener('keyup', validarHora)
  time.addEventListener('blur', validarHora)
})
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
// FUncionabilidad de lis checkbox de servicios
const validarChecks = (e) => {
  listaServicios.innerHTML = "";
  checks.forEach((e) => {
    if (e.checked == true) {
      var elemento = document.createElement('li');
      elemento.innerHTML = `${e.value}`;
      listaServicios.appendChild(elemento);
    }
  });
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





buttom.addEventListener("submit", async (e) => {
  e.preventDefault();


  // const res = await fetch("http://localhost:4500/api/cotizar", {
  //   method:"POST",
  //   headers:{
  //     "content-Type" : "application/json"
  //   },
  //   body: JSON.stringify({
  //     fecha: e.target.date.value,
  //     horaI: e.target.init.value,
  //     horaF: e.target.end.value,
  //     cSocial: social.checked,
  //     cEmpresa: empresa.checked,
  //     cMesas: mesas.checked,
  //     cSonidoP: sonidoP.checked,
  //     cSonidoE: sonidoE.checked,
  //     cBandera: banderas.checked,
  //     cMaquina: maquina.checked,
  //     cMantel: manteles.checked,
  //     name: e.target.name.value,
  //     phone: e.target.phone.value,
  //     email: e.target.email.value
  //   })
  // });
})
