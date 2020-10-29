//connect to database
//get tables
let table=[]

function ajouter(obj){
    table.push(obj);
}
function getAll(){
    return table;
}
function getByIndex(index){
    return table[index];
}

module.exports={ajouter,getAll,getByIndex}