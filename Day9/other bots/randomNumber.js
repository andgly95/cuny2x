var Twit = require('twit');
var config = require('./config.js');
var prompt = require('prompt');

var T = new Twit(config);

setInterval(randomNumberTweeter, 1000*5)

function randomNumberTweeter() {
    var rand = Math.floor(Math.random()*100)

    var tweet = {
        status: 'Bleep Bloop number ' + rand + '.'
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response){
        if(err) {
            console.log("Something went wrong")
        }
        else {
            console.log("Post was successful")
        }
    }
}