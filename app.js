const accountSid = "AC98078eb97924620752fc371c2dbaefaf";
const authToken = "f3bd28c7f8838209cd754d3a54542292";
const client = require('twilio')(accountSid, authToken);
var readlineSync = require('readline-sync');
var message = readlineSync.question('May I have your name? ');
var phoneno = readlineSync.question('May I have your no.? ');

client.messages
  .create({
     body: 'G\'day! from Melbourne.',
     from: '+17343388550',
     to: phoneno
   })
  .then(message => console.log(message.sid))
  .catch(err => console.log(err)); 
