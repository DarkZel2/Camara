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
  console.log(req.body);
  const date = req.body.date;
  const horaI = req.body.hri;
  const horaF = req.body.hrf;
  const peopleNum = req.body.peopleNum;
  const eventType = req.body.eventType;
  const activity = req.body.activity;
  const others = req.body.others;
  const eventCharacter = req.body.eventCharac;
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const personType = req.body.personType;
  const nit = req.body.nit;
  const reason = req.body.reason;
  const tel = req.body.tel;
  const address = req.body.address;
  const country = req.body.country;
  const services = req.body.services;
  const logistic = req.body.logistic;
  const timePrice = req.body.timePrice;
  const servicesPrice = req.body.servicesPrice;
  const totalPrice = req.body.totalPrice;

  let revisarActividad = "";
  if (activity === "Otros") {
    revisarActividad = others;
  } else {
    revisarActividad = activity;
  }

  const fecha = date.split("-");
  const year = fecha[0];
  const month = fecha[1];
  const day = fecha[2];
  
  const nuevaCotizacion = {
    date,
    peopleNum,
    eventType,
    revisarActividad,
    eventCharacter,
    name,
    phone,
    email,
    personType,
    nit,
    reason,
    tel,
    address,
    country,
    services,
    logistic,
    timePrice,
    servicesPrice,
    totalPrice,
  };
  
  const agregarEvento = async () => {
    const respuesta = await fetch("http://localhost:4500/api/data/newEvent", {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({
        day: day,
        month: month,
        year: year,
        initTime: req.body.hri,
        endTime: req.body.hrf
      }),
    });
    if (respuesta.ok) {
      return;
    }
  };

  agregarEvento();


  const postData = async () => {
    const getData = nuevaCotizacion;
    const response = await fetch("http://localhost:4500/api/data/cotizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: getData.date,
        initTime: req.body.hri,
        endTime: req.body.hrf,
        peopleNum: getData.peopleNum,
        eventType: getData.eventType,
        activity: revisarActividad,
        eventCharac: getData.eventCharacter,
        name: getData.name,
        phone: getData.phone,
        email: getData.email,
        personType: getData.personType,
        nit: getData.nit,
        reason: getData.reason,
        tel: getData.tel,
        address: getData.address,
        country: getData.country,
        services: getData.services,
        logistic: getData.logistic,
        timePrice: getData.timePrice,
        servicePrice: getData.servicesPrice,
        totalPrice: getData.totalPrice,
      }),
    });
    if (response.ok) {
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
