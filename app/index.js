import express from "express";
import cookieParser from "cookie-parser";
//Fix para __dirname 
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as autentication } from "./controllers/autentication.controller.js";
import { methods as authorization } from "./middlewares/authorization.js";
import { nuevoUsuario } from "./controllers/autentication.controller.js";
import { getConnection } from "./database/connection.js";

//server 
const app = express();
app.set("port", 4500);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto ", app.get("port"));

//Configuración
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cookieParser());

//Rutas 
app.get("/", (req, res) => res.sendFile(__dirname + "/pages/index.html"));
app.get("/salon", (req, res) => res.sendFile(__dirname + "/pages/salons/salon.html"));
app.get("/login", authorization.soloSinLog, (req, res) => res.sendFile(__dirname + "/pages/login.html"));
app.get("/register", authorization.soloSinLog, (req, res) => res.sendFile(__dirname + "/pages/register.html"));

//Rutas de usuarios
app.get("/user", authorization.soloUser, (req, res) => res.sendFile(__dirname + "/pages/users/user.html"));

//Rutas privadas
//SuperAdmin
app.get("/sAdmin", authorization.soloSAdmin, (req, res) => res.sendFile(__dirname + "/pages/private/superAdmin/sAdmin.html"));
app.get("/registerAdmin", authorization.soloSAdmin, (req, res) => res.sendFile(__dirname + "/pages/private/superAdmin/register.html"));
//Administrador general
app.get("/admin", authorization.soloAdmin, (req, res) => res.sendFile(__dirname + "/pages/private/admin/admin.html"));
//Reportes
app.get("/reports", authorization.soloReport, (req, res) => res.sendFile(__dirname + "/pages/private/reports/reports.html"));

//Rutas de autentificación
app.post("/api/register", autentication.register);
app.post("/api/login", autentication.login);

//Rutas de recursos
app.get("/img/logoCE", (req, res) => res.sendFile(__dirname + "/public/img/logos/Logo_CE-01.png"))
app.get("/img/logoCC", (req, res) => res.sendFile(__dirname + "/public/img/logos/LOGO CC B.png"))
app.get("/img/logoGOV", (req, res) => res.sendFile(__dirname + "/public/img/logos/Logo gov.webp"))

//Ruta para la base de datos
app.get("/api/usuarios", async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query("SELECT * FROM `usuarios`")
  res.json(result)
})
app.post("/api/nuevoUsuario", async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query("INSERT INTO `usuarios`(`id`, `name`, `email`, `access`, `password`) VALUES ('','','','','')")
  res.json(result);
})