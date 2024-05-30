const mensajeError = document.getElementsByClassName("error")

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = e.target.children.id.value;
  const password = e.target.children.password.value;
  const res = await fetch("http://localhost:4500/api/login", {
    method:"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      id,password
    })
  });
  if(!res.ok) {
    // mensajeError.classList.toggle("escondido", false);
    return;
  }
  const resJson = await res.json();
  if(resJson.redirect){
    window.location.href = resJson.redirect;
  }
})