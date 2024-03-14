1. 모듈화 
    1) / 
        go mod init login
        go get -u gorm.io/gorm
        go get -u gorm.io/driver/mysql
        go get -u github.com/gin-gonic/gin
        go get github.com/dgrijalva/jwt-go
        go get github.com/go-redis/redis/v7
        go get github.com/twinj/uuid
        go get github.com/joho/godotenv

2. Build
    go build -o app
    ./app 


3. Docker 
    - Build : docker build -t login:20240312-10 .
    - Run : docker run -p 60000:60000 -itd login:20240312-10  bash