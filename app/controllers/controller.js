const model=require('../models/model');

async function controller(req,res){
    res.json(req.body.email);
    console.log(req.body.email)
    return res.status(200).send();
}

async function add(req,res){
    let result=await model.ajouter(req.body);
    console.log(result)
    return res.status(201).send();
}

function getByIndex(req,res){
    let result=model.getByIndex(req.params.index);
    return res.json(result).status(201).send();
}

async function getAll(req,res){
    let result=await model.getAll();
    return res.json(result).status(201).send();
}

module.exports={controller,add,getByIndex,getAll}