package controller

import (
	db "feed/db"
	models "feed/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GET_Feed(c *gin.Context) {

	feed := new(models.Feed)

	//DATA MAP
	var feed_data []map[string]any

	//DB Call
	db := db.Connect()

	db.Model(&feed).Find(&feed_data)

	c.IndentedJSON(http.StatusOK, feed_data)
}
