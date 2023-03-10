
const alert1 = 
{
    "receiver": "monitoring/config-example/gchat-alerts",
    "status": "firing",
    "alerts": [
        {
            "status": "firing",
            "labels": {
                "alertname": "ExpedienteApiTraffic",
                "prometheus": "monitoring/api-monitoring",
                "severity": "warning"
            },
            "annotations": {
                "description": "API is having a lot traffic usage.",
                "runbook_url": "https://runbooks.prometheus-operator.dev/runbooks/general/nodenetworkinterfaceflapping",
                "summary": "traffic usage is greater than 13"
            },
            "startsAt": "2023-01-12T23:26:02.072Z",
            "endsAt": "0001-01-01T00:00:00Z",
            "generatorURL": "https://api-monitoring.uabc.cgib.produccion/prometheus/graph?g0.expr=%28sum%28rate%28expediente_ns_movil_alumnos_http_request_duration_seconds_count%5B1m%5D%29%29+%2A+60%29+%3E+11&g0.tab=1",
            "fingerprint": "277c402b52c755f7"
        }
    ],
    "groupLabels": {},
    "commonLabels": {
        "alertname": "ExpedienteApiTraffic",
        "prometheus": "monitoring/api-monitoring",
        "severity": "warning"
    },
    "commonAnnotations": {
        "description": "API is having a lot traffic usage.",
        "runbook_url": "https://runbooks.prometheus-operator.dev/runbooks/general/nodenetworkinterfaceflapping",
        "summary": "traffic usage is greater than 13"
    },
    "externalURL": "https://api-monitoring.uabc.cgib.produccion/alertmanager",
    "version": "4",
    "groupKey": "{}:{}",
    "truncatedAlerts": 0
};

module.exports = {
	alert1,
};