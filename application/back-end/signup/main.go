package main

import (
	handler "signup/handler"

	"github.com/gin-gonic/gin"
)

// ##################################
// ##           Global             ##
// ##################################
var router *gin.Engine

// ##################################
// ##            Main              ##
// ##################################
func main() {
	//Gin 라우터 생성
	router := gin.Default()

	//Templates 로드
	// router.LoadHTMLGlob("templates/*")

	// // ######################
	// // ##       HTML       ##
	// // ######################
	// // /경로 라우팅
	// router.GET("/signup", func(c *gin.Context) {
	// 	c.HTML(
	// 		http.StatusOK,
	// 		"signup.html", //html 파일 정의
	// 		gin.H{
	// 			"title": "Home Page",
	// 		},
	// 	)
	// })

	// ######################
	// ##       API       ##
	// ######################
	router.POST("/api/v1/user/signup", handler.SignUp)
	//Server Strat
	router.Run(":60001")
}
