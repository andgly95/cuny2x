var Twit = require('twit');
var config = require('./config.js');
var prompt = require('prompt');

var T = new Twit(config);
//
//  filter the twitter public stream by the word 'mango'.
//
var US = ['-179.1506', '18.9117', '-66.9406', '71.4410' ]
var stream = T.stream('statuses/filter', { track: '#oculusgo #vr', location: US })
 
stream.on('tweet', function (tweet) {
  console.log(tweet.text)
  T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
    if(err){
        console.log(err);
    }
    else {
        console.log("Successful RT")
    }
  })
})
