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
func POST_SignUp(c *gin.Context) {
	//Model Call
	user := new(models.User)

	//JSON Check
	if c.Bind(&user) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})
		return
	}
	//DB Connect
	db := db.Connect()

	//Email Check
	result := db.Find(models.User{}, "email=?", user.Email)

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
			"error": "Failed to Hash Password",
		})
		return
	}
	//암호화 패스워드 초기화
	user.Password = hashpw

	//Default Image 설정
	user.Profile_Image = "default_profile.jpg"

	// 위의 두단계에서 err가 nil일 경우 DB에 유저를 생성
	if err := db.Create(&user); err.Error != nil {
		c.JSON(http.StatusInternalServerError, "Failed SignUp")
		return
	}

	// 모든 처리가 끝난 후 200, Success 메시지를 반환
	c.JSON(http.StatusOK, gin.H{"code": "200"})
}
