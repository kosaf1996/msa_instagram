package db

import (
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// ##################################
// ##        ConnectDatabase       ##
// ##################################

func Connect() *gorm.DB {

	USER := os.Getenv("DBUSER")       // DB 유저명
	PASS := os.Getenv("DBPASS")       // DB 유저의 패스워드
	PROTOCOL := os.Getenv("PROTOCOL") // DB IP, PORT
	DBNAME := os.Getenv("DBNAME")     // DB Name

	CONNECT := USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME + "?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(CONNECT), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	return db
}

// ##################################
// ##           Queries            ##
// ##################################
