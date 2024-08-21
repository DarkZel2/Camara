async function getSalones() {
  const res = await fetch("http://localhost:4500/api/card/salones");
  const resJson = await res.json();
  return resJson;
};

function crearTarjetasSalones(salon) {
  const contenedorTarjetas = document.querySelector(".salones");
  salon.forEach(element => {
    const nuevoSalon = document.createElement("div");
    nuevoSalon.classList = "salon";
    nuevoSalon.innerHTML = `
		  <div class="card-img">
        <ul>
          <li>
            <img src="${element.Img1}">
          </li>
          <li>
            <img src="${element.Img2}">
          </li>
          <li>
            <img src="${element.Img3}">
          </li>
          <li>
            <img src="${element.Img4}">
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="card-head">
          <h2>${element.Name}</h2>
        </div>
        <div class="card-main">
          <p>${element.Description}</p>
        </div>
        <div class="card-footer">
          <a>Recorrido</a>
          <a onclick="redirectForId(${element.TarjetaID})">Ver más</a>
        </div>
      </div>
		`;
    contenedorTarjetas.appendChild(nuevoSalon);
  });
}

getSalones().then(salones => {
  crearTarjetasSalones(salones)
});

async function redirectForId(dato) {
  var datoId = "";
  datoId = dato;
  const response = await fetch("http://localhost:4500/api/ID/salones", {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      id: datoId
    })
  });
  if (response.ok) {
    const responseJson = await response.json();
    if (responseJson.redirect) {
      window.location.href = responseJson.redirect;
    }
  }
}