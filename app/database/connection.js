import mysql from "promise-mysql";

const connection = mysql.createConnection({
  host: "localhost",
  database: "prueba_camara_v2",
  user: "root",
  password: "",
});

async function showUsers(req, res) {
  const result = await (await connection).query("SELECT * FROM usuarios");
  res.json(result);
}

async function addUsers(req, res) {
  console.log(req.body);
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const access = req.body.access;
  const password = req.body.password;
  try {
    const result = await (
      await connection
    ).query(
      `INSERT INTO usuarios VALUES ('${id}','${name}','${email}','${access}','${password}')`
    );
  } catch {
    return res
      .status(400)
      .send({ status: "Error", message: "Error con la base de datos" });
  }
  return res.status(201).send({ status: "ok" });
}

async function showInfoSalons(req, res) {
  const result = await (
    await connection
  ).query("SELECT * FROM tarjetas_salones");
  res.json(result);
}

var almacenarId = "";

async function findForId(req, res) {
  console.log(req.body.id);
  const idConsulta = req.body.id;
  const result = await (
    await connection
  ).query(`SELECT * FROM Detalles_Salones WHERE TarjetaID = ${idConsulta};`);
  if (result) {
    almacenarId = idConsulta;
    return res
      .status(201)
      .send({ status: "ok", redirect: "salon/index", almacenarId });
  } else {
    return res
      .status(400)
      .send({ status: "Error", message: "Error en la base de datos" });
  }
}

async function getInfoSalons(req, res) {
  const result = await (
    await connection
  ).query(
    `SELECT TarjetaID, Name, Img1, Img2, Img3, Img4, ImgPlano FROM Tarjetas_Salones WHERE TarjetaID = ${almacenarId}`
  );
  res.json(result);
}

async function getServiciosSalones(req, res) {
  const result = await (
    await connection
  ).query(`
    SELECT servicios_salones.Description, servicios_salones.ImgDescriptiva FROM tarjetas_salones 
    INNER JOIN servicios_details ON tarjetas_salones.TarjetaID = servicios_details.CaracteristicasID 
    INNER JOIN servicios_salones ON servicios_details.ServiciosID = servicios_salones.ServiciosID 
    WHERE tarjetas_salones.TarjetaID = ${almacenarId}`);
  res.json(result);
}

async function getAdicionalesSalones(req, res) {
  const result = await (
    await connection
  ).query(`
    SELECT adicionales_salones.Description, adicionales_salones.ImgDescriptiva FROM tarjetas_salones 
    INNER JOIN adicionales_details ON tarjetas_salones.TarjetaID = adicionales_details.CaracteristicasID 
    INNER JOIN adicionales_salones ON adicionales_details.AdicionalesID = adicionales_salones.AdicionalesID 
    WHERE tarjetas_salones.TarjetaID = ${almacenarId}`);
  res.json(result);
}

async function getCaracteristicasSalones(req, res) {
  const result = await (
    await connection
  ).query(`
    SELECT caracteristicas_salones.Disponibilidad, capacidad_salones.Sociales, capacidad_salones.Empresariales, caracteristicas_salones.ImgDisponibilidad, capacidad_salones.ImgSocial, capacidad_salones.ImgEmpresarial FROM caracteristicas_salones 
    INNER JOIN capacidad_salones ON caracteristicas_salones.CapacidadID = capacidad_salones.CapacidadID 
    WHERE caracteristicas_salones.CaracteristicasID = ${almacenarId}`);
  res.json(result);
}

async function getEventosSalones(req, res) {
  const result = await (
    await connection
  ).query(`
      SELECT Day, Month, Year, InitHour, EndHour FROM eventos_salones WHERE TarjetaID = ${almacenarId}
    `);
  res.json(result);
}

async function preciosServicios(req, res) {
  const result = await (
    await connection
  ).query(`
      SELECT adicionales_salones.InterPrice, adicionales_salones.Description FROM tarjetas_salones 
      INNER JOIN adicionales_details ON tarjetas_salones.TarjetaID = adicionales_details.CaracteristicasID 
      INNER JOIN adicionales_salones ON adicionales_details.AdicionalesID = adicionales_salones.AdicionalesID
      WHERE tarjetas_salones.TarjetaID = ${almacenarId};
    `);
    res.json(result);
}

async function preciosHora(req, res) {
  const result = await ( await connection ).query(`
      SELECT * FROM Hora_Salones
      WHERE HoraID = ${almacenarId}
    `);
    res.json(result);
}

async function quote(req,res) {
  console.log(req.body);
  const date = req.body.date;
  const horaI = req.body.initTime;
  const horaF = req.body.endTime;
  const peopleNum = req.body.peopleNum;
  const eventType = req.body.eventType;
  const activity = req.body.revisarActividad
  const eventCharacter = req.body.eventCharac;
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const personType = req.body.personType;
  const nit = req.body.nit;
  const reason = req.body.reason;
  const tel = req.body.tel;
  const address = req.body.address;
  const country = req.body.country;
  const services = req.body.services;
  const logistic = req.body.logistic;
  const timePrice = req.body.timePrice;
  const servicesPrice = req.body.servicesPrice;
  const totalPrice = req.body.totalPrice;
  try {
    const result = await (
      await connection
    ).query(
      `INSERT INTO cotizacion_salones VALUES ('', '${date}', '${horaI}', '${horaF}', '${peopleNum}', '${eventType}', '${activity}', '${eventCharacter}', '${name}', '${phone}', '${email}', '${personType}', '${nit}', '${reason}', '${tel}', '${address}', '${country}', '${services}', '${logistic}', '${timePrice}', '${servicesPrice}', '${totalPrice}')`
    );
  } catch {
    return res
      .status(400)
      .send({ status: "Error", message: "Error en la solicitud." });
  }
  return res.status(201).send({ status: "ok" });
};

async function addEvent(req, res) {
  console.log(req.body);
  const Day = req.body.day
  const Month = req.body.month
  const Year = req.body.year
  const InitHour = req.body.initHour
  const EndHour = req.body.endHour
  try {
    const result = await (
      await connection
    ).query(
      `
        INSERT INTO eventos_salones VALUES ('','${Day}','${Month}','${Year}','${InitHour}','${EndHour}','${almacenarId}')
      `
    );
  } catch {
    return res
      .status(400)
      .send({ status: "Error", message: "Error con la base de datos" });
  }
  return res.status(201).send({ status: "ok" });
}

async function getEditSalones(req, res) {
  const result = await (
    await connection
  ).query(
    `SELECT TarjetaID, Name, Description FROM Tarjetas_Salones`
  );
  res.json(result);
}

async function showSolicitud(req, res) {
  const result = await ( await connection ). query(
    `SELECT * FROM cotizacion_salones`
  );
  res.json(result);
}

export const methods = {
  showUsers,
  addUsers,
  showInfoSalons,
  findForId,
  getInfoSalons,
  getServiciosSalones,
  getAdicionalesSalones,
  getCaracteristicasSalones,
  getEventosSalones,
  preciosServicios,
  preciosHora,
  quote,
  addEvent,
  getEditSalones,
  showSolicitud
};


