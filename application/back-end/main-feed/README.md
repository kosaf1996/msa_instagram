1. 모듈화 
    1) / 
        go mod init main
        go get -u gorm.io/gorm
        go get -u gorm.io/driver/mysql
        go get -u github.com/gin-gonic/gin
        go get -u github.com/joho/godotenv

2. Build
    go build -o app
    ./app 