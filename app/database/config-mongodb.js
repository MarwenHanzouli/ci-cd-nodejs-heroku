const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri = "mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@"+process.env.MONGO_HOST+"/"+process.env.MONGO_NAME+"?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports= {client}
