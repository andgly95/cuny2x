//Using Express
const express = require('express');
var app = express();
//Using Pug for templating engine
const pug = require('pug');

// File System for loading the list of words
var fs = require('fs');

//Set Template Engine to PUG
app.set('view engine', "pug");
app.set('views','./views')

app.use(express.static('public'));

//Check if log file exists and then load into log
var list;
var exists = fs.existsSync('cars.json');
if (exists) {
    console.log('loading cars');
    var txt = fs.readFileSync('cars.json','utf8');

    list = JSON.parse(txt);

} else list = {};

app.get('/', function(request, response){
    response.render('list', {carList: list});
})

app.get('/car/:index', function(request, response) {
    let index = request.params.index
    console.log("Results for car "+ index);
    response.render('details', {car: list[index]})
})

app.listen(3000, running);

function running(err){
    console.log("Running on port 3000");
}