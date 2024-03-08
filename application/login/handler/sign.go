package controller

import (
	"net/http"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

// ##################################
// ##           Global             ##
// ##################################
// DB Connector
// var db *gorm.DB

// ##################################
// ##           Login              ##
// ##################################
func Login(c *gin.Context) {
	var u User

	// if err := c.ShouldBindJSON(&u); err != nil {
	// 	c.JSON(http.StatusUnprocessableEntity, "Invalid json provided")
	// 	return
	// }
	// compare the user from the request, with the one we defined:
	if user.Email != u.Email || user.Password != u.Password {
		c.JSON(http.StatusUnauthorized, "Please provide valid login details")
		return
	}
	//JWT Token Create
	token, err := CreateToken(user.ID)
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, err.Error())
		return
	}
	//Success Status 200
	c.JSON(http.StatusOK, token)
}

// ##################################
// ##           JWT               ##
// ##################################
func CreateToken(userid uint64) (string, error) {
	var err error
	//Creating Access Token
	os.Setenv("ACCESS_SECRET", "msainstagram")
	atClaims := jwt.MapClaims{}
	atClaims["authorized"] = true
	atClaims["user_id"] = userid
	atClaims["exp"] = time.Now().Add(time.Minute * 60).Unix()
	at := jwt.NewWithClaims(jwt.SigningMethodHS256, atClaims)
	token, err := at.SignedString([]byte(os.Getenv("ACCESS_SECRET")))
	if err != nil {
		return "", err
	}
	return token, nil
}
