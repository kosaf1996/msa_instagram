package controller

import (
	db "feed/db"
	models "feed/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GET_User(c *gin.Context) {

	email := c.Query("email")
	if email == "" {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Email parameter is required",
		})
		return
	}

	//DB Call
	db := db.Connect()

	var result models.User
	if err := db.Where("email = ?", email).First(&result).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "User not found",
		})
		return
	}

	// 패스워드 정보 제거
	result.Password = ""

	c.IndentedJSON(http.StatusOK, result)
}
