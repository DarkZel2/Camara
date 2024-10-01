import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import { usuarios } from "../database/usuarios.js";

dotenv.config();

async function login(req,res) {
  console.log(req.body);
  const id = req.body.id;
  const password = req.body.password;
  if (!id || !password) {
    return res.status(400).send({status:"Error",message:"Los campos estan incompletos"})
  }

  const usuarioARevisar = usuarios.find(usuario => usuario.id === id);
  console.log(usuarioARevisar);

  if (!usuarioARevisar) {
    return res.status(400).send({status:"Error",message:"Credenciales incorrectas"})
  }
  if (usuarioARevisar) {
    const loginCorrecto = await bcryptjs.compare(password,usuarioARevisar.password)
    if (!loginCorrecto) {
      return res.status(400).send({status:"Error",message:"Contraseña incorrecta"})
    }

    const nivelAcceso = usuarioARevisar.access;
    
    // verificacion de acceso 0
    if (nivelAcceso === process.env.NIVEL_0_ACCESS) {
      const token = jsonwebtoken.sign({id:usuarioARevisar.id},process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRATION})

      const cookieOption = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        path: "/"
      }
      res.cookie("jwt",token,cookieOption);
      res.send({status:"ok",message:"Usuario loggeado",redirect:"/user"});
    } 
    // verificacion de acceso 1
      else if (nivelAcceso === process.env.NIVEL_1_ACCESS) {
      const token = jsonwebtoken.sign({id:usuarioARevisar.id},process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRATION})

      const cookieOption = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        path: "/"
      }
      res.cookie("jwt",token,cookieOption);
      res.send({status:"ok",message:"Usuario loggeado",redirect:"/sAdmin"});
    }
    // verificacion de acceso 2
      else if (nivelAcceso === process.env.NIVEL_2_ACCESS) {
      const token = jsonwebtoken.sign({id:usuarioARevisar.id},process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRATION})

      const cookieOption = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        path: "/"
      }
      res.cookie("jwt",token,cookieOption);
      res.send({status:"ok",message:"Usuario loggeado",redirect:"/admin"});
    }
    // verificacion de acceso 3
      else if (nivelAcceso === process.env.NIVEL_3_ACCESS) {
      const token = jsonwebtoken.sign({id:usuarioARevisar.id},process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRATION})

      const cookieOption = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        path: "/"
      }
      res.cookie("jwt",token,cookieOption);
      res.send({status:"ok",message:"Usuario loggeado",redirect:"/reports"});
    }else res.status(400).send({status:"Error",message:"Sin nivel de acceso"})
    
  }
};

async function register(req,res) {
  console.log(req.body);
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const access = req.body.access;
  const password = req.body.password;
  if(!id || !name || !email || !password) {
    return res.status(400).send({status:"Error",message:"Los campos estan incompletos"})
  }

  const usuarioARevisar = usuarios.find(usuario => usuario.id === id);

  if (usuarioARevisar) {
    return res.status(400).send({status:"Error",message:"Este usuario ya existe"})
  }
  const salt = await bcryptjs.genSalt(5);
  const hashPassword = await bcryptjs.hash(password,salt);
  
  //Enviar mail de verificación al usuario
  
  // const mail = await enviarMailVerificacion(email,"TOKEN DE PRUEBA")
  
  const nuevoUsuario = {
    id, name, email, access, password:hashPassword
  }

  const postData = async () => {
    const getData = nuevoUsuario;
    const response = await fetch("http://localhost:4500/api/nuevoUsuario", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: getData.id,
        name: getData.name,
        email: getData.email,
        access: getData.access,
        password: getData.password
      })
    });
    if (response.ok) {
      return;
    }
  }

  postData();
  
  return res.status(201).send({statu:"ok",message:`Usuario ${nuevoUsuario.name} agregado`,redirect:"/login"})
}

export const methods = {
  login,
  register,
};