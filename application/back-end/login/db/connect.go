package db

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// ##################################ㅌ
// ##        ConnectDatabase       ##
// ##################################

func Mysql_Connect() *gorm.DB {

	//.env 파일 로드
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	//DB 정보
	USER := os.Getenv("DBUSER")       // DB 유저명
	PASS := os.Getenv("DBPASS")       // DB 유저의 패스워드
	PROTOCOL := "tcp(localhost:3306)" // DB IP, PORT
	DBNAME := os.Getenv("DBNAME")     // DB Name

	CONNECT := USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME + "?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(CONNECT), &gorm.Config{})
	if err != nil {
		panic(err.Error())
	}

	return db
}
