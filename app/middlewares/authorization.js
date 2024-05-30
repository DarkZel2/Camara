import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import { usuarios } from "../database/usuarios.js";

dotenv.config();

function soloAdmin(req,res,next) {
  const loggeado = revisarCookie(req);
  if(loggeado) return next();
  return res.redirect("/login");
}

function soloPublico(req,res,next) {
  const loggeado = revisarCookie(req);
  if(!loggeado) return next();
  return res.redirect("/user");
}

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
    return false
  }
  
}

export const methods = {
  soloAdmin,
  soloPublico
};