var Twit = require('twit');
var config = require('./config.js');
var prompt = require('prompt');

var T = new Twit(config);

function makePost() {
    prompt.start();

    prompt.get('post', postStatus)

    function postStatus(err, result) {
        T.post('statuses/update', { status: result.post }, tweeted);
        function tweeted() {
            console.log("Status Updated");
        }
    }
}
makePost();