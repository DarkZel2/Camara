const express = require('express');
const morgan = require("morgan");
const database = require("./database")
const cors = require("cors");

//Configuracion inicial
const app = express();
app.set("port", 5500);
app.listen(app.get("port"));
console.log("Escuchando comunicaciones al puerto "+app.get("port"));

//Middlewares
app.use(morgan("dev"));
app.use(cors({
  origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501"]
}))

//Rutas
app.get("/eventos", async (req,res) => {
  let consultaEvento = "SELECT d.id, d.day, d.month, d.year, e.title, e.time FROM dayevent AS d INNER JOIN events AS e ON d.event=e.id;"
  const connection = await database.getConnection();
  const result = await connection.query(consultaEvento);
  res.json(result)
})

//INSERT INTO `eventos` (`ID`, `day`, `month`, `year`, `event_name`, `event_hour`) VALUES ('', '18', '5', '2024', 'Nuevo evento', '10:00 AM - 12:00 PM');