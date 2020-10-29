var pgp = require("pg-promise")();
require('dotenv').config();
const connectionConf = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: {
        rejectUnauthorized : false,
        // ca   : fs.readFileSync("server-ca.pem").toString(),
        // key  : fs.readFileSync("client-key.pem").toString(),
        // cert : fs.readFileSync("client-cert.pem").toString(),
  }
}
const db=pgp(connectionConf);

module.exports= {db}