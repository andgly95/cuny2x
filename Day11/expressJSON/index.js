//Using Express
const app = require('express');
//Using Pug for templating engine
//app.set('view engine', "pug");
// File System for loading the list of words
var fs = require('fs');


app.use(app.static('public'));

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
    fs.writeFile('log.json', json, utf8, finished);
    function finished(err) {
        console.log("Finished writing log");
        res.send(reply);
    }
}

app.get('/', function(request, response){
    response.render({})
})