async function getInfo() {
  const res = await fetch("http://localhost:4500/api/data/salones");
  const resJson = await res.json();
  return resJson;
};

function mostrarInfo(info) {
  const imgContainer= document.getElementById("slider");
  const title = document.getElementById("title");
  const page = document.getElementById("pageHead");
  info.forEach(element => {
    // console.log(element);
    page.innerText = element.Name;
    title.innerText = element.Name;
    imgContainer.innerHTML = `
      <section class="section-carrusel">
        <img src="${element.Img1}">
      </section>
      <section class="section-carrusel">
        <img src="${element.Img2}">
      </section>
      <section class="section-carrusel">
        <img src="${element.Img3}">
      </section>
      <section class="section-carrusel">
        <img src="${element.Img4}">
      </section>
    `;
  })
}

getInfo().then(informacion => {
  mostrarInfo(informacion)
});

async function getCaracteristicas() {
  const res = await fetch("http://localhost:4500/api/data/caracteristicas");
  const resJson = await res.json();
  return resJson;
};

function mostrarCaracteristicas(caracteristica) {
  const listaCapacidad = document.getElementById("capacityList");
  const campoDisponibilidad = document.getElementById("disponibilidad")
  caracteristica.forEach(element => {
    // console.log(element);
    listaCapacidad.innerHTML = `
    <li><img src="${element.ImgSocial}">${element.Sociales}</li>
      <li><img src="${element.ImgEmpresarial}">${element.Empresariales}</li>
    `
    campoDisponibilidad.innerHTML = `
      <li><img src="${element.ImgDisponibilidad}">${element.Disponibilidad}</li>
    `
  })
};

getCaracteristicas().then(caracteristicas => {
  mostrarCaracteristicas(caracteristicas)
});

async function getServicios() {
  const res = await fetch("http://localhost:4500/api/data/servicios");
  const resJson = await res.json();
  return resJson;
};

function mostrarServicios(servicio) {
  const listaServicios = document.getElementById("servicesList");
  servicio.forEach(element => {
    const nuevoServicio = document.createElement("li");
    nuevoServicio.innerHTML = `
      <img src="${element.ImgDescriptiva}">${element.Description}
    `
    listaServicios.appendChild(nuevoServicio);
  });
}

getServicios().then(servicios => {
  mostrarServicios(servicios)
})

async function getAdicionales() {
  const res = await fetch("http://localhost:4500/api/data/adicionales");
  const resJson = await res.json();
  return resJson;
}

function mostrarAdicionales(adicional) {
  const listaAdicionales = document.getElementById("aditionalList");
  adicional.forEach(element => {
    // console.log(element);
    const nuevoAdicional = document.createElement("li");
    nuevoAdicional.innerHTML = `
      <img src="${element.ImgDescriptiva}">${element.Description}
    `
    listaAdicionales.appendChild(nuevoAdicional);
  });
}

getAdicionales().then(adicionales => {
  mostrarAdicionales(adicionales)
});