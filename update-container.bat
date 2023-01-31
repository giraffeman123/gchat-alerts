echo on
cd "C:\Users\ellio\Desktop\gchat-alerts"
docker stop gchat-alerts-container
docker rm gchat-alerts-container
docker rmi gchat-alerts
docker build -t gchat-alerts . 
::docker-compose up -d 