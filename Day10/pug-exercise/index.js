var express = require('express');
var app = express();
const pug = require('pug');

const compiledFunction = pug.compileFile('./views/list.pug');

app.get('/', function (request, response) {
    response.render('list', {
        groceries: [{
            store: 'Acme',
            list: [
                'strawberries',
                'blueberries',
                'yogurt'
            ]
        }, {
            store: 'Corner Market',
            list: [
                'baguette',
                'basil',
                'tomatoes'
            ]
        }]
    })
})

app.set('view engine', 'pug');
app.set('views','./views');

app.listen(3000, function(){
    console.log("Listening on port 3000")
});