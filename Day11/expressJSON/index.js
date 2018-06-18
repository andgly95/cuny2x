//Using Express
const express = require('express');
var app = express();
//Using Pug for templating engine
const pug = require('pug');

// File System for loading the list of words
var fs = require('fs');

//Set Template Engine to PUG
const compiledFunction = pug.compileFile('./views/login.pug')
app.set('view engine', "pug");
app.set('views','./views')

app.use(express.static('public'));

//Check if log file exists and then load into log
var log;
var exists = fs.existsSync('log.json');
if (exists) {
    console.log('loading words');
    var txt = fs.readFileSync('log.json','utf8');

    log = JSON.parse(txt);

} else log = {};

app.get('/add', addUser);

function addUser(req, res) {
    let username = req.query.username;
    console.log(req.query);
    let email = req.query.email;
    log[username] = email;
    var reply = {
        username: username,
        email: email,
        status: 'success'
    }

    var json = JSON.stringify(log, null, 2);
    fs.writeFile('log.json', json, 'utf8', finished);
    function finished(err) {
        console.log("Finished writing log" + json);
        res.render('users', {userlist: JSON.parse(json)});
    }
}

app.get('/', function(request, response){
    response.render('login', console.log(""));
})

app.listen(3000, running);

function running(err){
    console.log("Running on port 3000");
}