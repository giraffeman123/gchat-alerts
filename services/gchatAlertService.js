const models = require('./../model/modules');
const webhooks = require('./../webhooks/modules');
const dotenv = require('dotenv');
// Se configura el módulo dotenv para la lectura de variables del archivo .env
dotenv.config();


const sendK8Alert = async (req, res) => {
    
    try {                
        //let k8AlertMsg = JSON.stringify(req.body);
        //console.log('---ALERT SEND---');
        //console.log(k8AlertMsg);
        
        let headerMsg = '<users/all> The following alerts are firing: \n';
        var headerWebHook = await webhooks.google.gChatWebhook(headerMsg);
        if(headerWebHook !== null && headerWebHook.status === 200 && headerWebHook.statusText == 'OK'){
          var alertManagerReq = req.body;          
          var requestWentFine = '';
          for(var indexOfAlert in Object.entries(alertManagerReq.alerts)){
            var alert = alertManagerReq.alerts[indexOfAlert];            
            var alertMsg = models.k8AlertModel.k8AlertToGchat(indexOfAlert,alert);
            var alertWebHook = await webhooks.google.gChatWebhook(alertMsg);     
            if(alertWebHook !== null && alertWebHook.status === 200 && alertWebHook.statusText == 'OK')
              requestWentFine += 'y';
            else 
              requestWentFine += 'n';
          } 

          if(!requestWentFine.includes('n'))
            return {'message':'alert(s) send to google chat API'};
          else  
            return {'error':'something happened with the webhook request'}        
        }else  
          return {'error':'something happened with the webhook request'}
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
  sendK8Alert,
};
