var Twit = require('twit');
var config = require('./config.js');
var prompt = require('prompt');

var T = new Twit(config);

var params = {
    q: 'Hippocrites',
    count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    for (let item in data.statuses){
        console.log(data.statuses[item].text);
    }
}