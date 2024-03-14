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
type Feed struct {
	gorm.Model
	ID          int          `json:id`
	content     string       `json:profil_image`
	image       string       `json:nickname`
	Email       string       `json:email`
	ActivatedAt sql.NullTime // Uses sql.NullTime for nullable time fields
	CreatedAt   time.Time    // Automatically managed by GORM for creation time
	UpdatedAt   time.Time    // Automatically managed by GORM for update time

}

// JWT Toekn Model
// type TokenDetails struct {
// 	AccessToken  string
// 	RefreshToken string
// 	AccessUuid   string
// 	RefreshUuid  string
// 	AtExpires    int64
// 	RtExpires    int64
// }
