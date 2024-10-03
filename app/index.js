import express from "express";
import cookieParser from "cookie-parser";
//Fix para __dirname 
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as autentication } from "./controllers/autentication.controller.js";
import { methods as authorization } from "./middlewares/authorization.js";
import { methods as database } from "./database/connection.js";

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
app.post("/api/cotizar", autentication.quote);

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
app.get("/img/icons/mesaO", (req, res) => res.sendFile(__dirname + "/public/img/icons/mesa_ovalada.png"));
app.get("/img/icons/aire", (req, res) => res.sendFile(__dirname + "/public/img/icons/aire.png"));
app.get("/img/icons/cocina", (req, res) => res.sendFile(__dirname + "/public/img/icons/cocina.png"));
app.get("/img/icons/ventiladores", (req, res) => res.sendFile(__dirname + "/public/img/icons/ventilador_techo.png"));
app.get("/img/icons/wifi", (req, res) => res.sendFile(__dirname + "/public/img/icons/wifi.png"));
app.get("/img/icons/sillaSin", (req, res) => res.sendFile(__dirname + "/public/img/icons/silla_sin.png"));
app.get("/img/icons/sillaA", (req, res) => res.sendFile(__dirname + "/public/img/icons/silla_academica.png"));

app.get("/img/presidentes/plano", (req, res) => res.sendFile(__dirname + "/public/img/planos/plano_presidentes.png"));
app.get("/img/empresarial/plano", (req, res) => res.sendFile(__dirname + "/public/img/planos/plano_empresarial.png"));
app.get("/img/aldana/plano", (req, res) => res.sendFile(__dirname + "/public/img/planos/plano_aldana.png"));
app.get("/img/catufa/plano", (req, res) => res.sendFile(__dirname + "/public/img/planos/plano_catufa.png"));
app.get("/img/umaña/plano", (req, res) => res.sendFile(__dirname + "/public/img/planos/plano_umaña.png"));

// Ruta para la base de datos
app.get("/api/usuarios", database.showUsers);
app.post("/api/nuevoUsuario", database.addUsers);
app.get("/api/card/salones", database.showInfoSalons);
app.post("/api/ID/salones", database.findForId);
app.get("/api/data/salones", database.getInfoSalons);
app.get("/api/data/servicios", database.getServiciosSalones);
app.get("/api/data/adicionales", database.getAdicionalesSalones);
app.get("/api/data/caracteristicas", database.getCaracteristicasSalones);
app.get("/api/data/eventos", database.getEventosSalones);
app.get("/api/data/cotizar/servicios", database.preciosServicios);
app.get("/api/data/cotizar/hora", database.preciosHora);
app.post("/api/data/cotizar", database.quote);
app.post("/api/data/newEvent", database.addEvent);
app.get("/api/data/showSalones", database.getEditSalones);
app.get("/api/data/solicitud", database.showSolicitud);