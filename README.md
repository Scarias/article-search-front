# Article Search Front

## How to execute

Can use Docker for fast deployment

```sh
docker build -t asfront:v1.0 . && \
docker run -d --name as-front -p 8080:8080 asfront:v1.0
```

or the shell script in this folder (remember give them execution permissions).
