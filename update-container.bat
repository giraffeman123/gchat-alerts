echo on
cd "C:\Users\ellio\Desktop\gchat-alerts"
docker stop gchat-alerts-container
docker rm gchat-alerts-container
docker rmi msr.uabc.edu.mx/dit/gchat-alerts
docker rmi gchat-alerts
docker build -t gchat-alerts . 
docker tag gchat-alerts msr.uabc.edu.mx/dit/gchat-alerts
docker push msr.uabc.edu.mx/dit/gchat-alerts
docker-compose up -d 