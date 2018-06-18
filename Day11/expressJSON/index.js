//Using Express
const express = require('express');
var app = express();
//Using Pug for templating engine
const pug = require('pug');

// File System for loading the list of words
var fs = require('fs');

const compiledFunction = pug.compileFile('./views/login.pug')
app.set('view engine', "pug");
app.set('views','./views')

app.use(express.static('public'));

var log;
var exists = fs.existsSync('log.json');
if (exists) {
    console.log('loading words');
    var txt = fs.readFileSync('log.json','utf8');

    log = JSON.parse(txt);

} else log = {};

app.get('/add/:username/:email', addUser);

function addUser(req, res) {
    let username = req.params.username;
    let email = req.params.email;
    log[username] = email;
    var reply = {
        username: username,
        email: email,
        status: 'success'
    }

    var json = JSON.stringify(log, null, 2);
    fs.writeFile('log.json', json, 'utf8', finished);
    function finished(err) {
        console.log("Finished writing log");
        res.send(reply);
    }
}

app.get('/register', function(request, response){
    response.render('login', console.log(request));
})

app.post('/register', function(request, response){
    response.render('login', console.log(request));
})

app.listen(3000, running);

function running(err){
    console.log("Running on port 3000");
}