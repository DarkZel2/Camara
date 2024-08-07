import mysql from "promise-mysql";

const connection = mysql.createConnection({
  host: "localhost",
  database: "gestion_camara",
  user: "root",
  password: ""
})

async function showUsers(req, res) {
  const result = await (await connection).query("SELECT * FROM usuarios");
  res.json(result)
}

async function addUsers (req, res) {
  console.log(req.body);
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const access = req.body.access;
  const password = req.body.password;
  try {
    const result = await (await connection).query(`INSERT INTO usuarios(id, name, email, access, password) VALUES ('${id}','${name}','${email}','${access}','${password}')`);
  } catch {
    return res.status(400).send({status:"Error",message:"Error con la base de datos"})
  }
  return res.status(201).send({statu:"ok"})
}

async function showInfoSalons(req, res) {
  const result = await (await connection).query("SELECT * FROM salones");
  res.json(result)
}

async function getSalons(req, res) {
  res.json();
}

export const methods = {
  showUsers,
  addUsers,
  showInfoSalons,
  getSalons
}