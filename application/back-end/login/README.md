1. 모듈화 
    1) / 
        go mod init login
        go get -u gorm.io/gorm
        go get -u gorm.io/driver/mysql
        go get -u github.com/gin-gonic/gin
        go get github.com/dgrijalva/jwt-go


2. Build
    go build -o app
    ./app 