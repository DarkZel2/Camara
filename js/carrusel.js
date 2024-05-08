const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".section-carrusel");

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
  if (counter >= sliderSection.length-1) {
    counter = 0;
    operacion = 0;
    slider.style.transform = `translateX(-${operacion}%)`
  } else {
    counter++
    operacion = operacion + widthImg;
    slider.style.transform = `translateX(-${operacion}%)`
    slider.style.transition = "all ease .6s"
  }
  
}

function moveToLeft() {
  counter--;
  if (counter < 0) {
    slider.style.transform = `translateX(-${operacion}%)`
  }
  operacion = operacion - widthImg;
  slider.style.transform = `translateX(-${operacion}%)`
  slider.style.transition = "all ease .6s"
}

