
const k8AlertToGchat = (msg) => {
    let formattedMsg = '<users/all> The following alerts are firing: \n';
    let alertsFiring = msg.alerts.map(function(alert, index){
        return `${index+1}.- *${alert.labels.alertname}* in prometheus *${alert.labels.prometheus}* started on *${alert.startsAt}*.\n--->Severity: *${alert.labels.severity}*\n--->Runbook URL: [${alert.annotations.runbook_url}].\n--->Query URL: [${alert.generatorURL}]\n`
    });

    return formattedMsg + alertsFiring.join('');
};

module.exports = {
    k8AlertToGchat,
};