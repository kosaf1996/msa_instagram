1. 모듈화 
    1) / 
        go mod init bookmark
        go get -u gorm.io/gorm
        go get -u gorm.io/driver/mysql
        go get -u github.com/gin-gonic/gin
        go get github.com/joho/godotenv

2. Build
    go build -o app
    ./app 


3. Docker 
    - Build : docker build -t login:20240312 .
    - Run : docker run -p 3000:3000 -itd login:20240312  bash