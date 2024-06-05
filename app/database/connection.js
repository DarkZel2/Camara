import mysql from "promise-mysql";

const connection = mysql.createConnection({
  host: "localhost",
  database: "gestion_camara",
  user: "root",
  password: ""
})

export const getConnection = async () => await connection;