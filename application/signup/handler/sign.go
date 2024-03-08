package handler

import (
	"net/http"
	db "signup/db"
	helper "signup/helper"
	models "signup/models"

	"github.com/gin-gonic/gin"
)

// ##################################
// ##            SignUp            ##
// ##################################
// 회원 가입
func SignUp(c *gin.Context) error {
	user := new(models.User)

	if err := c.Bind(user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})
		return
	}

	db := db.Connect()
	result := db.Find(&user, "email=?", user.Email)

	// 이미 이메일이 존재할 경우의 처리
	if result.RowsAffected != 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "existing email",
		})
		return
	}

	// 비밀번호를 bycrypt 라이브러리로 해싱 처리
	hashpw, err := helper.HashPassword(user.Password)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to Hasg Password",
		})
		return
	}
	user.Password = hashpw

	// 위의 두단계에서 err가 nil일 경우 DB에 유저를 생성
	if err := db.Create(&user); err.Error != nil {
		c.JSON(http.StatusInternalServerError, "Failed SignUp")
		return
	}

	// 모든 처리가 끝난 후 200, Success 메시지를 반환
	return c.JSON(http.StatusOK)
}
