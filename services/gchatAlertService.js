const fetch = require('node-fetch');

const getBody = async (req, res) => {
    
    try {        
        console.log(req.body);
        var webhookres = webhook();
        return req.body;
    } catch (err) {
        throw new Error(err);
    }
};

/**
 * Sends asynchronous message into Google Chat
 * @return{obj} response
 */
function webhook() {    
    const webhookURL = 'https://chat.googleapis.com/v1/spaces/AAAA43Nog24/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ymnLAHO-mjbOBcM7JEuxzFAUHf7xvSONk9kcULItyyc%3D';
  
    const data = JSON.stringify({
      'text': 'Hello from a Node script!',
    });
    let resp;
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: data,
    }).then((response) => {
      resp = response;
      console.log(response);
    });
    return resp;
  }

module.exports = {
    getBody,
};
