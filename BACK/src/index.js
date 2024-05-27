const express = require('express');
const morgan = require("morgan");
// const database = require("./database")
const cors = require("cors");

//Configuracion inicial
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Escuchando comunicaciones al puerto "+app.get("port"));

//Middlewares
app.use(morgan("dev"));
app.use(cors({
  origin: [""]
}))

//Rutas
// app.get("/eventos", async (req,res) => {
//   const connection = await database.getConnection();
//   const result = await connection.query("SELECT * FROM eventos");
//   res.json(result)
// })

app.get("/eventos", (req,res) => {
  res.json([
    {
      day: 10,
      month: 5,
      year: 20224,
      events: [
        {
          title: "Event",
          time: "12:00 PM - 12:30 PM"
        },
        {
          title: "Event 2",
          time: "2:00 PM - 2:30 PM"
        },
      ],
    },
  ])
});

//INSERT INTO `eventos` (`ID`, `day`, `month`, `year`, `event_name`, `event_hour`) VALUES ('', '18', '5', '2024', 'Nuevo evento', '10:00 AM - 12:00 PM');