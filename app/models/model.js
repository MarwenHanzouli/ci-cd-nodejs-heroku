//connect to database
//get tables
const databasePostgres=require('../database/config');
const db=databasePostgres.db;

const databaseMongo=require('../database/config-mongodb');
const client=databaseMongo.client;

let table=[]

function ajouter(obj){
    client.connect(async (err) => {
        const collection = client.db(process.env.MONGO_NAME).collection("users");
        await collection.insertOne(obj);
        // perform actions on the collection object
        client.close();
    });
    table.push(obj);
    return db.query('INSERT INTO users (name, email) VALUES ($1, $2)',[obj.name,obj.email]);
}
function getAll(){
    return db.query('SELECT * FROM users ORDER BY id ASC');
    //return table;
}
function getByIndex(index){
    return table[index];
}

module.exports={ajouter,getAll,getByIndex}