package controller

import (
	"login/db"
	"login/helper"
	models "login/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// ##################################
// ##            Login             ##
// ##################################
// 로그인
func Login(c *gin.Context) {
	user := new(models.User)

	//JSON Check
	if c.Bind(&user) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})
		return
	}

	//사용자 에게 받은 패스워드 정보
	inputpw := user.Password

	// DB 연결
	db := db.Connect()

	//Email조회
	result := db.Find(user, "email=?", user.Email)

	// 존재하지않는 아이디일 경우
	if result.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "existing email",
		})
		return
	}

	// 암호화 패스워드 체크
	res := helper.CheckPasswordHash(user.Password, inputpw)

	// 비밀번호 검증에 실패한 경우
	if !res {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Password Faild........",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{})
}

// ##################################
// ##           JWT               ##
// ##################################
// func CreateToken(userid uint64) (string, error) {
// 	var err error
// 	//Creating Access Token
// 	os.Setenv("ACCESS_SECRET", "msainstagram")
// 	atClaims := jwt.MapClaims{}
// 	atClaims["authorized"] = true
// 	atClaims["user_id"] = userid
// 	atClaims["exp"] = time.Now().Add(time.Minute * 60).Unix()
// 	at := jwt.NewWithClaims(jwt.SigningMethodHS256, atClaims)
// 	token, err := at.SignedString([]byte(os.Getenv("ACCESS_SECRET")))
// 	if err != nil {
// 		return "", err
// 	}
// 	return token, nil
// }
