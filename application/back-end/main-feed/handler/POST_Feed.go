package controller

import (
	db "feed/db"
	models "feed/models"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

// ##################################
// ##            Feed              ##
// ##################################
// Feed 함수는 이미지를 업로드하고 저장합니다.
func POST_Feed(c *gin.Context) {

	form, err := c.MultipartForm()
	if err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("error parsing form: %s", err.Error()))
		return
	}

	file, header, err := c.Request.FormFile("image")
	if err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("error retrieving the file: %s", err.Error()))
		return
	}
	defer file.Close()

	// UUID 생성
	uuidFilename := uuid.New().String()

	// 파일 이름에서 확장자 추출
	extension := filepath.Ext(header.Filename)

	// 새 파일 이름 생성
	newFilename := uuidFilename + extension

	// 이미지 파일 저장
	out, err := os.Create("../../image/" + newFilename)
	if err != nil {
		c.String(http.StatusInternalServerError, fmt.Sprintf("error saving the file: %s", err.Error()))
		return
	}
	defer out.Close()

	// 이미지 파일을 저장된 파일에 복사
	_, err = io.Copy(out, file)
	if err != nil {
		c.String(http.StatusInternalServerError, fmt.Sprintf("error copying the file: %s", err.Error()))
		return
	}

	// content와 imageName 추출
	content := form.Value["content"][0]
	email := form.Value["email"][0]
	// imageName := form.Value["imageName"][0]
	fmt.Println(newFilename)
	fmt.Println(content)
	fmt.Println(form.Value)
	fmt.Println(email)

	//Model Call
	feed := models.Feed{Image: newFilename, Email: email, Content: content}

	//DB Insert
	db := db.Connect()

	if err := db.Create(&feed); err.Error != nil {
		c.JSON(http.StatusInternalServerError, "Failed Feed Create")
		return
	}

	// 저장된 이미지 파일 경로와 content, imageName을 출력
	c.String(http.StatusOK, fmt.Sprintf("Image uploaded successfully!\nImage Name: %s\nContent: %s \nEmail: %s \n", newFilename, content, email))
}
