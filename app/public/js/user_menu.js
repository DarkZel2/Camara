const 
container0 = document.getElementById("c0"),
container1 = document.getElementById("c1"),
container2 = document.getElementById("c2"),
container3 = document.getElementById("c3"),
container4 = document.getElementById("c4"),
container5 = document.getElementById("c5"),
container6 = document.getElementById("c6"),
li1 = document.getElementById("t1"),
li2 = document.getElementById("t2"),
li3 = document.getElementById("t3"),
li4 = document.getElementById("t4"),
li5 = document.getElementById("t5"),
li6 = document.getElementById("t6");

li1.addEventListener("click", () => {
  container0.classList.add("escondido");
  container1.classList.remove("escondido");
  container2.classList.add("escondido");
  container3.classList.add("escondido");
  container4.classList.add("escondido");
  container5.classList.add("escondido");
  container6.classList.add("escondido");
})
li2.addEventListener("click", () => {
  container0.classList.add("escondido");
  container1.classList.add("escondido");
  container2.classList.remove("escondido");
  container3.classList.add("escondido");
  container4.classList.add("escondido");
  container5.classList.add("escondido");
  container6.classList.add("escondido");
})
li3.addEventListener("click", () => {
  container0.classList.add("escondido");
  container1.classList.add("escondido");
  container2.classList.add("escondido");
  container3.classList.remove("escondido");
  container4.classList.add("escondido");
  container5.classList.add("escondido");
  container6.classList.add("escondido");
})
li4.addEventListener("click", () => {
  container0.classList.add("escondido");
  container1.classList.add("escondido");
  container2.classList.add("escondido");
  container3.classList.add("escondido");
  container4.classList.remove("escondido");
  container5.classList.add("escondido");
  container6.classList.add("escondido");
})
li5.addEventListener("click", () => {
  container0.classList.add("escondido");
  container1.classList.add("escondido");
  container2.classList.add("escondido");
  container3.classList.add("escondido");
  container4.classList.add("escondido");
  container5.classList.remove("escondido");
  container6.classList.add("escondido");
})
li6.addEventListener("click", () => {
  container0.classList.add("escondido");
  container1.classList.add("escondido");
  container2.classList.add("escondido");
  container3.classList.add("escondido");
  container4.classList.add("escondido");
  container5.classList.add("escondido");
  container6.classList.remove("escondido");
})

