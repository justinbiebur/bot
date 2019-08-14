var Twit= require('twit');
var T = new Twit({
    consumer_key:         'DVkMLVadB20V4Lx9ksxXABNip',
    consumer_secret:      'Ypyhj1McvIRopHrRIBoY5J0yTuMulm1omLu4DmKM3bwDYXi0OK',
    access_token:         '2364972618-3rUYnKaVknNGnC1Yg8mGgrPH15dopqeUEonRK2o',
    access_token_secret:  '9Pki8XFBVXqq6ggWGLGsGgJuZzIq19dem4Yb9Hr4TWFtu',
    
  })

  var stream = T.stream('statuses/filter', { track: ['#30daysoflearning', '#30Daysoflearning', '#30DaysOfLearning'] })

  stream.on('tweet', function (tweet) {
    T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
        console.log(data)
      })
    
  })
  stream.on('error', function (event) {
      console.log('error occured');
      T.stream('statuses/filter', { track: ['#30daysoflearning', '#30Daysoflearning', '#30DaysOfLearning'] })
  })