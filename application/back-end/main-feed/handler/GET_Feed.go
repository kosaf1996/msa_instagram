package controller

import (
	db "feed/db"
	models "feed/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func GET_Feed(c *gin.Context) {

	feed := new(models.Feed)

	//DATA MAP
	// var feed_data []map[string]any
	var feedData []map[string]interface{}

	//DB Call
	db := db.Connect()

	db.Model(&feed).Order("id DESC").Find(&feedData)

	for key, value := range feedData {
		email := value["email"].(string) // email 필드가 string임을 가정
		feedid := value["id"]
		// ###########################
		// ##          User         ##
		// ###########################
		// 사용자 조회
		var user models.User
		if err := db.Where("email = ?", email).First(&user).Error; err != nil {
			c.JSON(http.StatusNotFound, gin.H{
				"error": "User not found",
			})
			return
		}
		// 사용자의 비밀번호 필드를 제거
		user.Password = ""

		// 사용자 정보를 피드 데이터에 추가
		value["user"] = user

		// ###########################
		// ##        BookMark       ##
		// ###########################
		var bookmark models.BookMark
		if err := db.Where("email = ? AND feed_id =? ", email, feedid).Last(&bookmark).Error; err != nil {
			if err == gorm.ErrRecordNotFound {
				// 북마크를 찾을 수 없을 때의 처리
				value["bookmark"] = map[string]interface{}{"IsMarked": false}
			} else {
				// 다른 오류가 발생한 경우에 대한 처리
				c.JSON(http.StatusInternalServerError, gin.H{
					"error": "Error while querying bookmark",
				})
				return
			}
		} else {
			value["bookmark"] = bookmark
		}

		// ###########################
		// ##         Like          ##
		// ###########################
		var like models.Like
		if err := db.Where("email = ? AND feed_id =? ", email, feedid).Last(&like).Error; err != nil {
			if err == gorm.ErrRecordNotFound {
				// 좋아요를 찾을 수 없을 때의 처리
				value["like"] = map[string]interface{}{"is_like": false}
			} else {
				// 다른 오류가 발생한 경우에 대한 처리
				c.JSON(http.StatusInternalServerError, gin.H{
					"error": "Error while querying Like",
				})
				return
			}
		} else {
			value["like"] = like
		}

		// // ###########################
		// // ##        Reply          ##
		// // ###########################
		// db.Model(&feed).Order("id DESC").Find(&feedData)

		// var reply models.Reply
		// if err := db.Where("email = ? AND feed_id = ?", email, feedid).Order("id DESC").Find(&reply).Error; err != nil {
		// 	if err == gorm.ErrRecordNotFound {
		// 		// 좋아요를 찾을 수 없을 때의 처리
		// 		value["reply"] = "nil"
		// 	} else {
		// 		// 다른 오류가 발생한 경우에 대한 처리
		// 		c.JSON(http.StatusInternalServerError, gin.H{
		// 			"error": "Error while querying Reply",
		// 		})
		// 		return
		// 	}
		// } else {
		// 	value["reply"] = reply
		// }

		// 수정된  정보를 슬라이스에 업데이트
		feedData[key] = value
	}
	c.IndentedJSON(http.StatusOK, feedData)
}
