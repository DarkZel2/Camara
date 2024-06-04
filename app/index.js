import express from "express";
import cookieParser from "cookie-parser";
//Fix para __dirname 
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as autentication } from "./controllers/autentication.controller.js";
import { methods as authorization } from "./middlewares/authorization.js";

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
app.get("/", (req,res) => res.sendFile(__dirname + "/pages/index.html"));
app.get("/salon", (req,res) => res.sendFile(__dirname + "/pages/salons/salon.html"));
app.get("/login", authorization.soloSinLog, (req,res) => res.sendFile(__dirname + "/pages/login.html"));
app.get("/register", authorization.soloSinLog, (req,res) => res.sendFile(__dirname + "/pages/register.html"));

//Rutas de usuarios
app.get("/user", authorization.soloUser, (req,res) => res.sendFile(__dirname + "/pages/users/user.html"));

//Rutas privadas
    //SuperAdmin
    app.get("/sAdmin", authorization.soloSAdmin, (req,res) => res.sendFile(__dirname + "/pages/private/superAdmin/sAdmin.html"));
    app.get("/registerAdmin", authorization.soloSAdmin, (req,res) => res.sendFile(__dirname + "/pages/private/superAdmin/register.html"));
    //Administrador general
    app.get("/admin", authorization.soloAdmin, authorization.soloSAdmin, (req,res) => res.sendFile(__dirname + "/pages/private/admin/admin.html"));
    //Reportes
    app.get("/reports", authorization.soloReport, authorization.soloSAdmin, (req,res) => res.sendFile(__dirname + "/pages/private/reports/reports.html"));

//Rutas de autentificación
app.post("/api/register", autentication.register);
app.post("/api/login", autentication.login);