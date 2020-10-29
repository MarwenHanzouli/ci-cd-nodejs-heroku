const controller=require('../controllers/controller')

function add(app){
    app.post("/users/add",controller.add);
}

function get(app){
    app.get("/users/:index",controller.getByIndex);
}

function getAll(app){
    app.get("/users",controller.getAll);
}
module.exports={add,get,getAll}