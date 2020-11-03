const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri=process.env.MONGO_URI || "mongodb://localhost:27017/darna";
const client = new MongoClient(uri, { useNewUrlParser: true }).connect();
module.exports= {client}
