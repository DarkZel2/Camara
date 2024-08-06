import express from "express";
import cookieParser from "cookie-parser";
//Fix para __dirname 
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as autentication } from "./controllers/autentication.controller.js";
import { methods as authorization } from "./middlewares/authorization.js";
import { methods as database } from "./database/connection.js";
import { methods as process } from "./controllers/quote.controller.js";
import { methods as information } from "./controllers/infoSalons.controller.js";
// import { salones } from "./database/salones.js";

//Server 
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
app.get("/auditorio-Presidentes", (req, res) => res.sendFile(__dirname + "/pages/salons/aud_presidentes.html"));
app.get("/login", authorization.soloSinLog, (req, res) => res.sendFile(__dirname + "/pages/login.html"));
app.get("/register", authorization.soloSinLog, (req, res) => res.sendFile(__dirname + "/pages/register.html"));

//Rutas públicas
app.get("/salon/index", (req, res) => res.sendFile(__dirname + "/pages/salons/salonesIndex.html"));
app.get("/cotizar", authorization.soloConLog, (req, res) => res.sendFile(__dirname + "/pages/process/cotizar.html"));

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

//Rutas de procesos
app.post("/api/register", autentication.register);
app.post("/api/login", autentication.login);
app.post("/api/cotizar", process.quote);
app.post("/api/info", information.getInfo);

//Rutas de recursos
app.get("/img/logoCE", (req, res) => res.sendFile(__dirname + "/public/img/logos/Logo_CE-01.png"));
app.get("/img/logoCC", (req, res) => res.sendFile(__dirname + "/public/img/logos/LOGO CC B.png"));
app.get("/img/logoGOV", (req, res) => res.sendFile(__dirname + "/public/img/logos/Logo gov.webp"));
//Rutas para los archivos css
app.get("/css/header", (req, res) => res.sendFile(__dirname + "/public/css/header.css"));
app.get("/css/footer", (req, res) => res.sendFile(__dirname + "/public/css/footer.css"));
app.get("/css/salon", (req, res) => res.sendFile(__dirname + "/public/css/salon.css"));
app.get("/css/calendar", (req, res) => res.sendFile(__dirname + "/public/css/calendar.css"));
//Rutas de archivos

app.get("/img/icons/bandera", (req, res) => res.sendFile(__dirname + "/public/img/icons/bandera.png"));
app.get("/img/icons/cafe", (req, res) => res.sendFile(__dirname + "/public/img/icons/cafe.png"));
app.get("/img/icons/calendario", (req, res) => res.sendFile(__dirname + "/public/img/icons/calendario.png"));
app.get("/img/icons/empresarial", (req, res) => res.sendFile(__dirname + "/public/img/icons/empresarial.png"));
app.get("/img/icons/manteles", (req, res) => res.sendFile(__dirname + "/public/img/icons/manteles.png"));
app.get("/img/icons/maquina", (req, res) => res.sendFile(__dirname + "/public/img/icons/maquina.png"));
app.get("/img/icons/mesa", (req, res) => res.sendFile(__dirname + "/public/img/icons/mesa.png"));
app.get("/img/icons/parqueadero", (req, res) => res.sendFile(__dirname + "/public/img/icons/parqueadero.png"));
app.get("/img/icons/silla", (req, res) => res.sendFile(__dirname + "/public/img/icons/silla.png"));
app.get("/img/icons/social", (req, res) => res.sendFile(__dirname + "/public/img/icons/social.png"));
app.get("/img/icons/sonido_ex", (req, res) => res.sendFile(__dirname + "/public/img/icons/sonido_externo.png"));
app.get("/img/icons/sonido_pro", (req, res) => res.sendFile(__dirname + "/public/img/icons/sonido_profesional.png"));
app.get("/img/icons/audiovisual", (req, res) => res.sendFile(__dirname + "/public/img/icons/audiovisual.png"));

app.get("/img/presidentes/plano", (req, res) => res.sendFile(__dirname + "/public/img/presidentes/plano_aud_presidentes.png"));

//Ruta para la base de datos
app.get("/api/usuarios", database.showUsers);
app.post("/api/nuevoUsuario", database.addUsers);
app.get("/api/pagina1/datos", database.getSalons);
app.get("/api/card/salones", database.showInfoSalons);
// app.get("/api/info/salones", (req, res) => {
//   res.json(salones);
// });

