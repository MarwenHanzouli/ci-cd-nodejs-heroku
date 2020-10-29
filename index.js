const express = require('express')
var bodyParser = require('body-parser')
const usersRoutes=require('./app/routes/route')
var cors = require('cors')

let app = express();
let port = process.env.PORT || 8080;
 
app.get('/', function(req, res) { 
    res.send('Hello world  ! ')
});

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

usersRoutes.get(app);
usersRoutes.add(app);

app.listen(port, () =>  { // ecoute du serveur sur le port 8080
    console.log('le serveur fonctionne')
});
