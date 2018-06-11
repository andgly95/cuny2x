var express = require('express');

var app = express();

app.get('/hello/wh(o)?(a)?', function(request, response){
	console.log('got request for "hello/world"');
	response.send(`I know, right?`);
	});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});