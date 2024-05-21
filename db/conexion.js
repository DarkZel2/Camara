let Mysql = require("mysql");

let connection = Mysql.createConnection({
  host: "localhost",
  database: "gestion_sistema_camara",
  user: "root",
  password: ""
});

connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log("Conexión establecida")
  }
});

const ingreso = "SELECT * FROM `registro`"

connection.query(ingreso, function(error, value) {
  if (error) {
    throw error;
  } else {
    console.log(value)
  }
})

connection.end();