const controller=require('../controllers/controller')

function add(app){
    app.post("/users/add",controller.add);
}

function get(app){
    app.get("/users/:index",controller.getByIndex);
}

module.exports={add,get}