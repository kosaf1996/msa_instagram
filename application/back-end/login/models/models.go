package models

import (
	"database/sql"
	"time"

	"gorm.io/gorm"
)

// ##################################
// ##           Model              ##
// ##################################
// User Model
type User struct {
	gorm.Model
	ID            int          `json:id`
	Profile_Image string       `json:profil_image`
	Nickname      string       `json:nickname`
	Name          string       `json:name`
	Email         string       `json:email`
	Password      string       `json:password`
	ActivatedAt   sql.NullTime // Uses sql.NullTime for nullable time fields
	CreatedAt     time.Time    // Automatically managed by GORM for creation time
	UpdatedAt     time.Time    // Automatically managed by GORM for update time

}

// JWT Toekn Model
type TokenDetails struct {
	AccessToken  string
	RefreshToken string
	AccessUuid   string
	RefreshUuid  string
	AtExpires    int64
	RtExpires    int64
}
