const contenedorTarjetas = document.querySelector(".salones");

async function getSalones() {
	const res = await fetch("http://localhost:4500/api/card/salones");
	const resJson = await res.json();
	return resJson;
}

function crearTarjetasSalones (salon){
	salon.forEach(element => {
		const nuevoSalon = document.createElement("div")
		nuevoSalon.classList = "salon";
		nuevoSalon.innerHTML = `
		<div class="card-img">
          <ul>
            <li>
              <img src="${element.img1}">
            </li>
            <li>
              <img src="${element.img2}">
            </li>
            <li>
              <img src="${element.img3}">
            </li>
            <li>
              <img src="${element.img4}">
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="card-head">
            <h2>${element.name}</h2>
          </div>
          <div class="card-main">
            <p>${element.description}</p>
          </div>
          <div class="card-footer">
            <a href="">Recorrido</a>
            <a href="/api/salon/index">Ver más</a>
          </div>
        </div>
		`

		contenedorTarjetas.appendChild(nuevoSalon);
	});
}

getSalones().then(salones => {
	crearTarjetasSalones(salones)
})