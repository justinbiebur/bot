var Twit= require('twit');
var T = new Twit({
    consumer_key:         'vJHaz87lxjKzpK52WgNZbxJrw',
    consumer_secret:      'KiQp1ZdPUOXIwuwQoyAJQATc8srDxcQ4KHVjwGOaq5EqKLBlo0',
    access_token:         '1161713462956834816-9kNypjHpXJM2xi1dE1T5iGgxTRBQHl',
    access_token_secret:  '03pjFsN44l0SidzFaanwSOGIJUeAHN0zKIleFjdDjkDec',
    
  })

  var stream = T.stream('statuses/filter', { track: ['#100DaysOfCompetitiveProgrammingNITRR', '#FOSSNITRR', '#100daysofcompetitiveprogrammingnitrr'] })

  stream.on('tweet', function (tweet) {
    T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
        console.log(data)
      })
    
  })
  stream.on('error', function (event) {
      console.log('error occured');
      T.stream('statuses/filter', { track: ['#100DaysOfCompetetiveProgrammingNITRR', '#FOSSNITRR', '#100daysofcompetetiveprogrammingnitrr'] })
  })
