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
app.get("/", authorization.soloPublico, (req,res) => res.sendFile(__dirname + "/pages/index.html"));
app.get("/login", authorization.soloPublico, (req,res) => res.sendFile(__dirname + "/pages/login.html"));
app.get("/register", authorization.soloPublico, (req,res) => res.sendFile(__dirname + "/pages/register.html"));
app.get("/admin", authorization.soloAdmin, (req,res) => res.sendFile(__dirname + "/pages/admin/admin.html"));
app.get("/user", authorization.soloPublico, (req,res) => res.sendFile(__dirname + "/pages/users/user.html"));
app.get("/salon", authorization.soloPublico, (req,res) => res.sendFile(__dirname + "/pages/salons/salon.html"));
app.post("/api/register", autentication.register);
app.post("/api/login", autentication.login);