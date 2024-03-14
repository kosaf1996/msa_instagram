package helper

import (
	"golang.org/x/crypto/bcrypt"
)

// ##################################
// ##        Check Password        ##
// ##################################
// 암호화 패스워드 체크
func CheckPasswordHash(hashVal, userPw string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hashVal), []byte(userPw))
	if err != nil {
		return false
	} else {
		return true
	}
}
