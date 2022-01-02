import axios from 'axios';

export const TestComponent = (props) => {
  //const ACCOUNT_SID = "AC328815b6f17c750d80bedcc36bb5f3ce";
  const accountSid = "ACf0660d83b54452dd82af793988b69485";
  //const AUTH_TOKEN = "90924da28b6854a695c34a12bac34e5a";
  const authToken = "bf5cc12a2c492f49030aae72ef397e45";
  const twilio = require('twilio');
  const client = new twilio(accountSid, authToken);
  var qs = require('qs');

  const sendMessage = () => {
    axios.post("https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json", qs.stringify({
      Body: "message",
      From: '+13374863499',
      To: '+17023353384'
    }), {
      auth: {
      username: accountSid,
      password: authToken
      }
    });
  }

  return (
    <div>
      <button onClick = {() => sendMessage()}> Click </button>
    </div>
  )
}