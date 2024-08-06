import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import { usuarios } from "../database/usuarios.js";

dotenv.config();

function revisarCookie(req) {
  try {
    const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
    const decodificada = jsonwebtoken.verify(cookieJWT,process.env.JWT_SECRET);
    console.log(decodificada)
    const usuarioARevisar = usuarios.find(usuario => usuario.id === decodificada.id);
    console.log(usuarioARevisar)
    if (!usuarioARevisar) {
      return false
    }
    return true;
  }
  catch {
    return false;
  }
}

function soloSAdmin(req,res,next) {
  const loggeado = revisarCookie(req);
  const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
  const decodificada = jsonwebtoken.verify(cookieJWT,process.env.JWT_SECRET);
  const usuarioARevisar = usuarios.find(usuario => usuario.id === decodificada.id);
  const nivelAcceso = usuarioARevisar.access;
  const acceso1 = nivelAcceso === process.env.NIVEL_1_ACCESS;
  if(loggeado && acceso1) return next();
  return res.redirect("/admin");
}

function soloAdmin(req,res,next) {
  const loggeado = revisarCookie(req);
  const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
  const decodificada = jsonwebtoken.verify(cookieJWT,process.env.JWT_SECRET);
  const usuarioARevisar = usuarios.find(usuario => usuario.id === decodificada.id);
  const nivelAcceso = usuarioARevisar.access;
  const acceso2 = nivelAcceso === process.env.NIVEL_2_ACCESS || nivelAcceso === process.env.NIVEL_1_ACCESS;
  if(loggeado && acceso2) return next();
  return res.redirect("/reports");
}

function soloReport(req,res,next) {
  const loggeado = revisarCookie(req);
  const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
  const decodificada = jsonwebtoken.verify(cookieJWT,process.env.JWT_SECRET);
  const usuarioARevisar = usuarios.find(usuario => usuario.id === decodificada.id);
  const nivelAcceso = usuarioARevisar.access;
  const acceso3 = nivelAcceso === process.env.NIVEL_3_ACCESS || nivelAcceso === process.env.NIVEL_1_ACCESS;
  if(loggeado && acceso3) return next();
  return res.redirect("/login");
}

function soloUser(req,res,next) {
  const loggeado = revisarCookie(req);
  const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
  const decodificada = jsonwebtoken.verify(cookieJWT,process.env.JWT_SECRET);
  const usuarioARevisar = usuarios.find(usuario => usuario.id === decodificada.id);
  const nivelAcceso = usuarioARevisar.access;
  const acceso0 = nivelAcceso === process.env.NIVEL_0_ACCESS;
  if(loggeado && acceso0) return next();
  return res.redirect("/sAdmin");
}

function soloConLog(req,res,next) {
  const loggeado = revisarCookie(req);
  if(loggeado) return next();
  return res.redirect("/login");
}

function soloSinLog(req,res,next) {
  const loggeado = revisarCookie(req);
  if(!loggeado) return next();
  return res.redirect("/user");
}

export const methods = {
  soloAdmin,
  soloSinLog,
  soloUser,
  soloSAdmin,
  soloReport,
  soloConLog
};