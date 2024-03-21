package main

import (
	handler "feed/handler"
	"log"
	"net/http"

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
	router.LoadHTMLGlob("templates/*")

	// ######################
	// ##       HTML       ##
	// ######################
	// /경로 라우팅
	router.GET("/main", func(c *gin.Context) {
		c.HTML(
			http.StatusOK,
			"main.html", //html 파일 정의
			gin.H{
				"title": "Home Page",
			},
		)
	})

	// ######################
	// ##       API       ##
	// ######################
	router.POST("/api/v1/instagram/feed", handler.POST_Feed)
	//Server Strat
	log.Fatal(router.Run(":3002"))
}
