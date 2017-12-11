/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '124f0d4aefa0477b9fb4e19ecde5d6b9'; // Your client id
var client_secret = 'cc57d70aaa184ee0abb167bf15b28f85'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var data = [];

var stateKey = 'spotify_auth_state';

var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/test', function(req,res){
  console.log(data);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.write(JSON.stringify({"status":"succes"}));
  res.end();
});

app.post("/post",function(req,res){
  console.log(req + "  res: "+ res);
  console.log(req.body);
  data.push(req);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.write(JSON.stringify({"status":"succes"}));
  res.end();
})

console.log('Listening on 8888');
app.listen(8888);
