var express = require('express');
var app = express();
var ejs = require('ejs');

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

app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(3000, function(){
    console.log("Listening on port 3000")
});