//connect to database
//get tables
const databasePostgres=require('../database/config');
const db=databasePostgres.db;

const databaseMongo=require('../database/config-mongodb');
const client=databaseMongo.client;
var collection;
client.connect(() => {
    collection = client.db(process.env.MONGO_NAME).collection("users");
    //client.close();
});
let table=[]

function ajouter(obj){
    return collection.insertOne(obj);
    //table.push(obj);
    //return db.query('INSERT INTO users (name, email) VALUES ($1, $2)',[obj.name,obj.email]);
}
function getAll(){
    return db.query('SELECT * FROM users ORDER BY id ASC');
    return 
    //return table;
}
function getByIndex(index){
    return table[index];
}

module.exports={ajouter,getAll,getByIndex}