/**
 * Author :- Sandip Nandi
 * Creation Date :- 27-Feb-23
 * Address :- Bangalore, Karnataka
 * Availability Checker Notifier.
 *
 **/

// npm install twilio
const twilio = require('twilio');
const accountSid = 'ACc40eb1c0368aca104f3f07a3ddb223dd';
const authToken = '464dac8466082d9e85d2307aef1d62b1';

const client = new twilio(accountSid, authToken);

client.messages.create({
  from: 'whatsapp:+141552386', 
  
  body: 'Your Twilio code is 123832', 
  
  to: 'whatsapp:+49151828855' 
  
}).then(msg => console.log(msg.sid));

//   twilio message send.










