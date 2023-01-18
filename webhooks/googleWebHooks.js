const axios = require('axios');

const gChatWebhook = async(msg) => {
    const webhookURL = process.env.WEBHOOK_URL;
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
    const payload = { "text" : msg };
  
    try{
      const resp = await axios.post(webhookURL, payload, headers);
      return resp;
    }catch(err){      
      throw new Error(err);
    }  
};

module.exports = {
    gChatWebhook,
};