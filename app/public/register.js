const mensajeError = document.getElementsByClassName("error");

document.getElementById("register-form").addEventListener("submit",async(e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:4500/api/register", {
    method:"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      id: e.target.children.id.value,
      name: e.target.children.name.value,
      email: e.target.children.email.value,
      password: e.target.children.password.value
    })
  });
  if (!res.ok) {
    // mensajeError.classList.toggle("escondido",false);
    return;
  }
  const resJson = await res.json();
  if (resJson.redirect) {
    window.location.href = resJson.redirect;
  }
})