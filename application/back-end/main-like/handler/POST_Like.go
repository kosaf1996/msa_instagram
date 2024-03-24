package controller

import (
	db "like/db"
	models "like/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func POST_Like(c *gin.Context) {

	like := new(models.Like)

	//JSON Check
	if c.Bind(&like) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})
		return
	}

	//DB Call
	db := db.Connect()

	// 위의 두단계에서 err가 nil일 경우 DB에 유저를 생성
	if err := db.Create(&like); err.Error != nil {
		c.JSON(http.StatusInternalServerError, "Failed Like")
		return
	}

	// 모든 처리가 끝난 후 200, Success 메시지를 반환
	c.JSON(http.StatusOK, gin.H{"code": "200"})
}
