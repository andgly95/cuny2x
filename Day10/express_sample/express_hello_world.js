var express = require('express');

var app = express();

app.get('/hello', function(request, response) {
	console.log(request.query);
	response.send(request.query);
})

app.get('/a(pp)?le', function(request, response){
	console.log('got request for "apple/ale"');
	response.send(`Apple or Ale?`);
	});

app.get('/wh(o)+(a)+', function(request, response){
	console.log('got request for "whoa"');
	response.send(`I know, right?`);
	});

app.get('/:first/:last', function (request, response) {
	console.log('got request for "first/last"');
	response.send("Hello, " + request.params.first + " " + request.params.last);
});

app.get('/:word', function (request, response) {
	console.log('got request for "word"');
	let word = request.params.word;
	let splitWord = word.split("");
	let reverseArray = splitWord.reverse();
	let reverseWord = reverseArray.join();
	response.send(request.params.word + " backwards is " + reverseWord);
});



app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});