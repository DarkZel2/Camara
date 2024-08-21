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
      `INSERT INTO usuarios(id, name, email, access, password) VALUES ('${id}','${name}','${email}','${access}','${password}')`
    );
  } catch {
    return res
      .status(400)
      .send({ status: "Error", message: "Error con la base de datos" });
  }
  return res.status(201).send({ statu: "ok" });
}

async function showInfoSalons(req, res) {
  const result = await (
    await connection
  ).query("SELECT * FROM tarjetas_salones");
  res.json(result);
}

var almacenarId = ""

async function findForId(req, res) {
  console.log(req.body.id);
  const idConsulta = req.body.id;
  const result = await (await connection).query(`SELECT * FROM Detalles_Salones WHERE TarjetaID = ${idConsulta};`);
  if (result) {
    almacenarId = idConsulta;
    return res.status(201).send({ status: "ok",redirect:"salon/index"}), almacenarId;
  } else {
    return res.status(400).send({ status: "Error", message: "Error en la base de datos" });
  }
}

async function getInfoSalons(req, res) {
  res.json(almacenarId)
}

export const methods = {
  showUsers,
  addUsers,
  showInfoSalons,
  findForId,
  getInfoSalons
};


// Consultas para la informacion de los salones

// Consulta de los servicios
// SELECT Servicios_Salones.Description FROM Tarjetas_Salones
// 	INNER JOIN Servicios_Details ON Tarjetas_Salones.TarjetaID = Servicios_Details.CaracteristicasID
// 	INNER JOIN Servicios_Salones ON Servicios_Details.ServiciosID = Servicios_Salones.ServiciosID
// WHERE Tarjetas_Salones.TarjetaID = 1

