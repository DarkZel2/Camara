// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();


// const transporter = nodemailer.createTransport({
//   host:process.env.EMAIL_HOST,
//   port:587,
//   secure:true,
//   auth:{
//     user:process.env.EMAIL_USER,
//     pass:process.env.EMAIL_PASSWORD
//   }
// })

// export async function enviarMailVerificacion(direccion) {
//   transporter,sendMail({
//     from:"Centro de Eventos",
//     to:direccion,
//     subject:"Verificaion de nueva cuenta - Centro de Eventos",
//     html:crearMailVerificacion(token)
//   })
// }

// function crearMailVerificacion(token) {
//   return `
  
//   `
// }