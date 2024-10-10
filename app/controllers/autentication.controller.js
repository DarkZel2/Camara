import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import { usuarios } from "../database/usuarios.js";

dotenv.config();

async function login(req, res) {
  console.log(req.body);
  const id = req.body.id;
  const password = req.body.password;
  if (!id || !password) {
    return res
      .status(400)
      .send({ status: "Error", message: "Los campos estan incompletos" });
  }

  const usuarioARevisar = usuarios.find((usuario) => usuario.id === id);
  console.log(usuarioARevisar);

  if (!usuarioARevisar) {
    return res
      .status(400)
      .send({ status: "Error", message: "Credenciales incorrectas" });
  }
  if (usuarioARevisar) {
    const loginCorrecto = await bcryptjs.compare(
      password,
      usuarioARevisar.password
    );
    if (!loginCorrecto) {
      return res
        .status(400)
        .send({ status: "Error", message: "Contraseña incorrecta" });
    }

    const nivelAcceso = usuarioARevisar.access;

    // verificacion de acceso 0
    if (nivelAcceso === process.env.NIVEL_0_ACCESS) {
      const token = jsonwebtoken.sign(
        { id: usuarioARevisar.id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION }
      );

      const cookieOption = {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        path: "/",
      };
      res.cookie("jwt", token, cookieOption);
      res.send({
        status: "ok",
        message: "Usuario loggeado",
        redirect: "/user",
      });
    }
    // verificacion de acceso 1
    else if (nivelAcceso === process.env.NIVEL_1_ACCESS) {
      const token = jsonwebtoken.sign(
        { id: usuarioARevisar.id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION }
      );

      const cookieOption = {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        path: "/",
      };
      res.cookie("jwt", token, cookieOption);
      res.send({
        status: "ok",
        message: "Usuario loggeado",
        redirect: "/sAdmin",
      });
    }
    // verificacion de acceso 2
    else if (nivelAcceso === process.env.NIVEL_2_ACCESS) {
      const token = jsonwebtoken.sign(
        { id: usuarioARevisar.id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION }
      );

      const cookieOption = {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        path: "/",
      };
      res.cookie("jwt", token, cookieOption);
      res.send({
        status: "ok",
        message: "Usuario loggeado",
        redirect: "/admin",
      });
    }
    // verificacion de acceso 3
    else if (nivelAcceso === process.env.NIVEL_3_ACCESS) {
      const token = jsonwebtoken.sign(
        { id: usuarioARevisar.id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION }
      );

      const cookieOption = {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        path: "/",
      };
      res.cookie("jwt", token, cookieOption);
      res.send({
        status: "ok",
        message: "Usuario loggeado",
        redirect: "/reports",
      });
    } else
      res.status(400).send({ status: "Error", message: "Sin nivel de acceso" });
  }
}

async function register(req, res) {
  console.log(req.body);
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const access = req.body.access;
  const password = req.body.password;
  if (!id || !name || !email || !password) {
    return res
      .status(400)
      .send({ status: "Error", message: "Los campos estan incompletos" });
  }

  const usuarioARevisar = usuarios.find((usuario) => usuario.id === id);

  if (usuarioARevisar) {
    return res
      .status(400)
      .send({ status: "Error", message: "Este usuario ya existe" });
  }
  const salt = await bcryptjs.genSalt(5);
  const hashPassword = await bcryptjs.hash(password, salt);

  const nuevoUsuario = {
    id,
    name,
    email,
    access,
    password: hashPassword,
  };

  const postData = async () => {
    const getData = nuevoUsuario;
    const response = await fetch("http://localhost:4500/api/nuevoUsuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: getData.id,
        name: getData.name,
        email: getData.email,
        access: getData.access,
        password: getData.password,
      }),
    });
    if (response.ok) {
      return;
    }
  };

  postData();

  return res.status(201).send({
    statu: "ok",
    message: `Usuario ${nuevoUsuario.name} agregado`,
    redirect: "/login",
  });
}

async function quote(req, res) {
  const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
  const decodificada = jsonwebtoken.verify(cookieJWT,process.env.JWT_SECRET);
  const usuarioARevisar = usuarios.find(usuario => usuario.id === decodificada.id);

  console.log(req.body);
  const date = req.body.date;
  const horaI = req.body.initTime;
  const horaF = req.body.endTime;
  const peopleNum = req.body.peopleNum;
  const eventType = req.body.eventType;
  const activity = req.body.activity;
  const others = req.body.others;
  const eventCharacter = req.body.eventCharac;
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const personType = req.body.personType;
  let nit = req.body.nit;
  let reason = req.body.reason;
  let tel = req.body.tel;
  const address = req.body.address;
  const country = req.body.country;
  const services = req.body.services;
  const logistic = req.body.logistic;
  const timePrice = req.body.timePrice;
  const servicePrice = req.body.servicePrice;
  const totalPrice = req.body.totalPrice;
  const estado = "En espera";
  const user = usuarioARevisar.id;

  let revisarActividad = "";
  if (activity === "Otros") {
    revisarActividad = others;
  } else {
    revisarActividad = activity;
  }
  let logUpdate = "";
  if (logistic) {
    logUpdate = "Si";
  } else if (!logistic) {
    logUpdate = "No"
  }
  let clearEmpty = "No aplica";
  if (nit === "") {
    nit = clearEmpty;
  }
  if (reason === "") {
    reason = clearEmpty;
  }
  if (tel === "") {
    tel = clearEmpty;
  }

  const fecha = date.split("-");
  const year = fecha[0];
  const month = fecha[1];
  const day = fecha[2];
  
  const agregarEvento = async () => {
    const respuesta = await fetch("http://localhost:4500/api/data/newEvent", {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({
        day: day,
        month: month,
        year: year,
        initTime: horaI,
        endTime: horaF
      }),
    });
    if (respuesta.ok) {
      return;
    }
  };

  const postData = async () => {
    const response = await fetch("http://localhost:4500/api/data/cotizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: date,
        initTime: horaI,
        endTime: horaF,
        peopleNum: peopleNum,
        eventType: eventType,
        activity: revisarActividad,
        eventCharac: eventCharacter,
        name: name,
        phone: phone,
        email: email,
        personType: personType,
        nit: nit,
        reason: reason,
        tel: tel,
        address: address,
        country: country,
        services: services,
        logistic: logUpdate,
        timePrice: timePrice,
        servicePrice: servicePrice,
        totalPrice: totalPrice,
        estado: estado,
        user: user
      }),
    });
    if (response.ok) {
      agregarEvento();
      return;
    }
  };

  postData();

  return res
    .status(201)
    .send({ status: "ok", message: `Solicitud exitosa`, redirect: "/" });
}

export const methods = {
  login,
  register,
  quote,
};
