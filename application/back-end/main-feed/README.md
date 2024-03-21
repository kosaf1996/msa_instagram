1. 모듈화 
    1) / 
        go mod init feed
        go get -u gorm.io/gorm
        go get -u gorm.io/driver/mysql
        go get -u github.com/gin-gonic/gin
        go get -u github.com/joho/godotenv
        go get github.com/google/uuid


2. Build
    go build -o app
    ./app 