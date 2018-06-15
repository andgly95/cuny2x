var express = require('express');
var app = express();
var hbs = require('hbs');
var fs = require('fs');

app.set('view engine', 'hbs');

hbs.registerPartial('item', fs.readFileSync('./views/list.hbs','utf-8'));

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


app.set('views','./views');

app.listen(3000, function(){
    console.log("Listening on port 3000")
});