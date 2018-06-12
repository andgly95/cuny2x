var Twit = require('twit');
var config = require('./config.js');
var prompt = require('prompt');

var T = new Twit(config);
//
//  filter the twitter public stream by the word 'mango'.
//
var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]
var stream = T.stream('statuses/filter', { track: '#oculusgo #vr', location: sanFrancisco })
 
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
