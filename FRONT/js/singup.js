const 
  registroContainer = document.querySelector(".registro"),
  btnRegistro = document.querySelector(".btn-registro"),
  body = document.querySelector("body");

btnRegistro.addEventListener("click", e => {
  registroContainer.classList.add("active");

})

document.addEventListener("click", e => {
  registroContainer.classList.remove("active")
})