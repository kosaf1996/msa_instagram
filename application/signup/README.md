1. 모듈화 
    1) / 
        go mod init signup
        go get -u gorm.io/gorm
        go get -u gorm.io/driver/mysql
        go get -u github.com/gin-gonic/gin
        go get github.com/dgrijalva/jwt-go
        go get github.com/labstack/echo/v4

2. Build
    go build -o app
    ./app 