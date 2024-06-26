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
    sonidoP: 500000,
    mesas: 4000,
    sonidoE: 120000,
    banderas: 80000,
    maquina: 30000,
    mantel: 18000
  }
}

const valorMesas = salones.servicios.mesas;
const valorSonidoP = salones.servicios.sonidoP;
const valorSonidoE = salones.servicios.sonidoE;
const valorBanderas = salones.servicios.banderas;
const valorManteles = salones.servicios.mantel;
const valorMaquina = salones.servicios.maquina;

document.getElementById("event-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log()
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
