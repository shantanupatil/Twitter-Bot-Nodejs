console.log('Bot Started..');
const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
console.log('Bot Configured..');


var quotes = [
  "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
  "Get busy living or get busy dying.",
  "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
  "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
  "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
  "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people.A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
  "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
  "Those who dare to fail miserably can achieve greatly.I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.It is hard to fail, but it is worse never to have tried to succeed.",
  "I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.It is hard to fail, but it is worse never to have tried to succeed.",
  "I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.It is hard to fail, but it is worse never to have tried to succeed.",
  "It is hard to fail, but it is worse never to have tried to succeed.",
  "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.Let us always meet each other with smile, for the smile is the beginning of love.Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  "Let us always meet each other with smile, for the smile is the beginning of love.Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  "Our greatest fear should not be of failure… but of succeeding at things in life that don’t really matter.",
  "Remember that the happiest people are not those getting more, but those giving more.",
  "It is our choices, that show what we truly are, far more than our abilities.",
  "Only put off until tomorrow what you are willing to die having left undone.",
  "If you want to be happy, be.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "I never knew how to worship until I knew how to love.",
  "The opposite of love is not hate; it’s indifference.",
  "A friend is someone who gives you total freedom to be yourself.",
  "Never let the fear of striking out keep you from playing the game.",
  "Live in the sunshine, swim the sea, drink the wild air.",
  "Life is trying things to see if they work.",
  "The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors.",
  "Success is how high you bounce when you hit bottom.",
  "May you live all the days of your life.",
  "You will face many defeats in life, but never let yourself be defeated.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "You’re not obligated to win. You’re obligated to keep trying. To the best you can do everyday.",
  "If life were predictable it would cease to be life, and be without flavor.",
  "The question isn’t who is going to let me; it’s who is going to stop me.",
  "The successful warrior is the average man, with laser-like focus.",
  "A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
  "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
  "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
  "Success? I don’t know what that word means. I’m happy. But success, that goes back to what in somebody’s eyes success means. For me, success is inner peace. That’s a good day for me.",
  "You miss 100 percent of the shots you never take."
];

var loop = setInterval(tweetIt, 15000000);

var count = 0;
function tweetIt() {

  var params;

  if(quotes.length < 150) {
    var quo = quotes[count] + "\n#quotes #quoteoftheday #positive #memories #dailyquotes"
    params = {
        status: quo
    };
  } else if (quotes.length < 200 ) {
    var qu = quotes[count] + "\n#quotes #quoteoftheday #positive"
    params = {
        status: qu
    };
  } else {
    params = {
      status: quotes[count]
    }
  }

  function onSuccess(err, data, response) {
    if (!err) {
      console.log("Success", params.status);
    } else {
      console.log("Err: ", err);
    }
  }

  T.post('statuses/update', params, onSuccess);

  count++;

  if (count == quotes.length) {
    clearInterval(loop);
  }
}
