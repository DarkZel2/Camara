import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import { usuarios } from "../database/usuarios.js";
import { admin } from "../database/admin.js"
// import { enviarMailVerificacion } from "../services/mail.services";

dotenv.config();

async function login(req,res) {
  console.log(req.body);
  const id = req.body.id;
  const password = req.body.password;
  if (!id || !password) {
    return res.status(400).send({status:"Error",message:"Los campos estan incompletos"})
  }
  const adminARevisar = admin.find(admin => admin.id === id);
  const usuarioARevisar = usuarios.find(usuario => usuario.id === id);
  if (!adminARevisar && !usuarioARevisar) {
    return res.status(400).send({status:"Error",message:"Credenciales incorrectas"})
  }
  //Revisión admin
  
  if (adminARevisar) {
    const loginCorrecto = await bcryptjs.compare(password,adminARevisar.password)
    if (!loginCorrecto) {
      return res.status(400).send({status:"Error",message:"Credenciales incorrectas"})
    }
    const token = jsonwebtoken.sign({id:adminARevisar.id},process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRATION})

    const cookieOption = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      path: "/"
    }
    res.cookie("jwt",token,cookieOption);
    res.send({status:"ok",message:"Usuario loggeado",redirect:"/admin"});
  }
  //Revisión usuario
  
  if (usuarioARevisar) {
    const loginCorrecto = await bcryptjs.compare(password,usuarioARevisar.password)
    if (!loginCorrecto) {
      return res.status(400).send({status:"Error",message:"Credenciales incorrectas"})
    }
    const token = jsonwebtoken.sign({id:usuarioARevisar.id},process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRATION})

    const cookieOption = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      path: "/"
    }
    res.cookie("jwt",token,cookieOption);
    res.send({status:"ok",message:"Usuario loggeado",redirect:"/usuario"});
  }
  
};

async function register(req,res) {
  console.log(req.body);
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  if(!id || !name || !email || !password) {
    return res.status(400).send({status:"Error",message:"Los campos estan incompletos"})
  }
  const usuarioARevisar = usuarios.find(usuario => usuario.id === id);
  const adminARevisar = usuarios.find(usuario => usuario.id === id);
  if (adminARevisar && usuarioARevisar) {
    return res.status(400).send({status:"Error",message:"Este usuario ya existe"})
  }
  const salt = await bcryptjs.genSalt(5);
  const hashPassword = await bcryptjs.hash(password,salt);

  //Enviar mail de verificación al usuario

  // const mail = await enviarMailVerificacion(email,"TOKEN DE PRUEBA")

  const nuevoAdmin = {
    id, name, email, password:hashPassword
  }

  const nuevoUsuario ={
    id, name, email, password:hashPassword
  }
  admin.push(nuevoAdmin)
  usuarios.push(nuevoUsuario);
  console.log(usuarios);
  console.log(admin);
  return res.status(201).send({statu:"ok",message:`Usuario ${nuevoUsuario.name} agregado`,redirect:"/login"})
};

export const methods = {
  login,
  register
};