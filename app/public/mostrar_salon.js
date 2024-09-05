async function getInfo() {
  const res = await fetch("http://localhost:4500/api/data/salones");
  const resJson = await res.json();
  return resJson;
};

function mostrarInfo(info) {
  
  const img1 = document.getElementById("img1"),
    img2 = document.getElementById("img2"),
    img3 = document.getElementById("img3"),
    img4 = document.getElementById("img4");
  const title = document.getElementById("title");
  const page = document.getElementById("pageHead");
  const plano = document.getElementById("plano");
  info.forEach(element => {
    console.log(element)
    page.innerText = element.Name;
    title.innerText = element.Name;
    img1.innerHTML = `<img src="${element.Img1}">`;
    img2.innerHTML = `<img src="${element.Img2}">`;
    img3.innerHTML = `<img src="${element.Img3}">`;
    img4.innerHTML = `<img src="${element.Img4}">`;
    plano.innerHTML = `<img src="${element.ImgPlano}">`;
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