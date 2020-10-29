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

//const db = pgp("postgres://kfbsuzjfiuxlpt:07f23c1d2a2fef2c6db2240eb4a31bf7471f1e557b508658f10ebcd3e0df4d23@ec2-54-247-103-43.eu-west-1.compute.amazonaws.com:5432/daqp7mreb3jhd3?ssl=true");

module.exports= {db}