import { salones } from "../database/salones.js";

async function getInfo(req, res) {
  var getId = Number;
  getId = req.body.idSolicitado;
  console.log(getId);
  if (!getId) {
    return res.status(400).send({ status: "Error", message: "El ID no fue recibido." })
  }

  const revisarId = salones.find(info => info.id === getId);

  if (!revisarId) {
    return res.status(400).send({ status: "Error", message: "ID no encontrado." })
  }

  return res.status(201).send({ status: "ok", message: "Información encontrada", redirect: "/salon/index" })
};

export const methods = {
  getInfo
}