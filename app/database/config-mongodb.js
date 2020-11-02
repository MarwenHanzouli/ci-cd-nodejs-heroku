const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri=process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports= {client}
