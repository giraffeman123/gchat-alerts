const axios = require('axios');
const models = require('./../model/modules');
const dotenv = require('dotenv');
// Se configura el módulo dotenv para la lectura de variables del archivo .env
dotenv.config();

//const k8AlertManagerExamples = require('../exampleAlerts/k8AlertManagerExamples');

const sendK8Alert = async (req, res) => {
    
    try {                
        let k8AlertMsg = JSON.stringify(req.body);
        console.log(k8AlertMsg);
        
        let formatMsg = models.k8AlertModel.k8AlertToGchat(req.body);        
        var webhookres = await gChatWebhook(formatMsg);
        if(webhookres !== null && webhookres.status === 200 && webhookres.statusText == 'OK')
          return {'message':'alert send to google chat API'};
        else  
          return {'error':'something happened with the webhook request'}
    } catch (err) {
        throw new Error(err);
    }
};

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
    console.log(err);
    throw new Error(err);
  }  
};

module.exports = {
  sendK8Alert,
};
