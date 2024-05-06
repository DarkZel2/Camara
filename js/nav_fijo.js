var navbar = document.getElementById("#hd-fijo");

window.addEventListener("scroll", function(){
  navbar.classList.toggle("abajo", window.scrollY>0)
})