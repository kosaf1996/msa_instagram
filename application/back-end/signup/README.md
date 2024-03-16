1. 모듈화 
    1) / 
        go mod init signup
        go get -u gorm.io/gorm
        go get -u gorm.io/driver/mysql
        go get -u github.com/gin-gonic/gin
        go get github.com/dgrijalva/jwt-go
        go get golang.org/x/crypto/bcrypt
        go get github.com/joho/godotenv
        


2. Build
    go build -o app
    ./app 

3. Docker 
    - Build : docker build -t signup:20240316 .
    - Run : docker run -p 60001:60001 -itd signup:20240316  bash