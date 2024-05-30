import mysql from "promise-mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  host:process.env.DB_HOST,
  database:process.env.DB_NAME,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD
})

const getConnection = async () => await connection;

module.exports = {
  getConnection
}