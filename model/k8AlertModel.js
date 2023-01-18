
const k8AlertToGchat = (index,alert) => {
    var date = new Date(alert.startsAt);
    return `${parseInt(index)+1}.- *${alert.labels.alertname}* in prometheus *${alert.labels.prometheus}* started on *${date}*.\n--->Description: _${alert.annotations.description}_\n--->Severity: *${alert.labels.severity}*\n--->Runbook URL: [${alert.annotations.runbook_url}].\n--->Query URL: [${alert.generatorURL}]\n`;
};

module.exports = {
    k8AlertToGchat,
};