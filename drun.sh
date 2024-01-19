#!bin/sh
docker run -t asfront:v1.0 .
docker build -d --name as-front -p 8080:8080 asfront:v1.0