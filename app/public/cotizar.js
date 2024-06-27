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
      lunes: 164000,
      martes: 164000,
      miercoles: 164000,
      jueves: 164000,
      viernes: 184000,
      sabado: 184000
    },
    horas: {
      afiliado: {
        lunes: 878000,
        martes: 878000,
        miercoles: 878000,
        jueves: 878000,
        viernes: 1010000,
        sabado: 1010000
      },
      particular: {
        lunes: 1145000,
        martes: 1145000,
        miercoles: 1145000,
        jueves: 1145000,
        viernes: 1145000,
        sabado: 1145000
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

const valorMesas = salones.servicios.mesas;
const valorSonidoP = salones.servicios.sonidoPro;
const valorSonidoE = salones.servicios.sonidoEx;
const valorBanderas = salones.servicios.banderas;
const valorManteles = salones.servicios.manteles;
const valorMaquina = salones.servicios.maquina;

const checks =  document.querySelectorAll(".formulario__checkbox");
const buttom =  document.getElementById("event-form");
const lista = document.getElementById("lista");

let seleccionados = [];

function insertSelect(value) {
  const comprobar = seleccionados.find();
  if (!comprobar) {
    seleccionados.push(value);
  }
}

buttom.addEventListener("submit", async (e) => {
  e.preventDefault();

  lista.innerHTML = "";
  checks.forEach((e) => {
    if (e.checked == true){
      insertSelect(e.value);
      var elemento = document.createElement('li');
      elemento.innerHTML = e.value;
      lista.appendChild(elemento);
      return seleccionados;
    }
  });
  console.log(seleccionados)
  console.log(salones.servicios)

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
