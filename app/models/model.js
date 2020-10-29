//connect to database
//get tables
const database=require('../database/config');
const db=database.db;

let table=[]

function ajouter(obj){
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