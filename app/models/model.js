//connect to database
//get tables
const databasePostgres=require('../database/config');
const db=databasePostgres.db;

const databaseMongo=require('../database/config-mongodb');
const client=databaseMongo.client;
// var collection;
// client.connect(() => {
//     collection = client.db(process.env.MONGO_NAME).collection("users");
//     //client.close();
// });
let table=[]

async function ajouter(obj){
    try {
        await client.connect();
        let collection = client.db(process.env.MONGO_NAME).collection("users");
        await collection.insertOne(obj);
    } catch (e) {
        console.error(e);
    } finally {
        //await client.close();
    }
    //table.push(obj);
    //return db.query('INSERT INTO users (name, email) VALUES ($1, $2)',[obj.name,obj.email]);
}
async function getAll(){
    try {
        await client.connect();
        let collection = client.db(process.env.MONGO_NAME).collection("users");
        return collection.find({}).toArray();
    } catch (e) {
        console.error(e);
    } finally {
        //await client.close();
    }
    //return db.query('SELECT * FROM users ORDER BY id ASC');
    //return table;
}
function getByIndex(index){
    return table[index];
}

module.exports={ajouter,getAll,getByIndex}