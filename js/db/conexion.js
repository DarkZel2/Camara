let Mysql = require("mysql");

let connection = Mysql.createConnection({
  host: "localhost",
  database: "GestionSistema_Camara",
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

connection.end();