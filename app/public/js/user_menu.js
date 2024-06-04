const 
datosContainer = document.getElementById("datos"),
solicitudContainer = document.getElementById("solicitud"),
reserContainer = document.getElementById("reser"),
prevReserContainer = document.getElementById("prev-reser"),
inicioContainer = document.getElementById("inicio"),
li1 = document.getElementById("1"),
li2 = document.getElementById("2"),
li3 = document.getElementById("3"),
li4 = document.getElementById("4");

li1.addEventListener("click", (e) => {
  datosContainer.classList.remove("escondido");
  solicitudContainer.classList.add("escondido");
  reserContainer.classList.add("escondido");
  prevReserContainer.classList.add("escondido");
  inicioContainer.classList.add("escondido");
})
li2.addEventListener("click", (e) => {
  datosContainer.classList.add("escondido");
  solicitudContainer.classList.remove("escondido");
  reserContainer.classList.add("escondido");
  prevReserContainer.classList.add("escondido");
  inicioContainer.classList.add("escondido");
})
li3.addEventListener("click", (e) => {
  datosContainer.classList.add("escondido");
  solicitudContainer.classList.add("escondido");
  reserContainer.classList.remove("escondido");
  prevReserContainer.classList.add("escondido");
  inicioContainer.classList.add("escondido");
})
li4.addEventListener("click", (e) => {
  datosContainer.classList.add("escondido");
  solicitudContainer.classList.add("escondido");
  reserContainer.classList.add("escondido");
  prevReserContainer.classList.remove("escondido");
  inicioContainer.classList.add("escondido");
})

