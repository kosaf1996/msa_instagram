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
	Content     string       `json:content`
	Image       string       `json:image`
	Email       string       `json:email`
	ActivatedAt sql.NullTime // Uses sql.NullTime for nullable time fields
	CreatedAt   time.Time    // Automatically managed by GORM for creation time
	UpdatedAt   time.Time    // Automatically managed by GORM for update time

}

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

// BookMark
type BookMark struct {
	gorm.Model
	ID          int          `json:id`
	FeedId      string       `json:feed_id`
	IsMarked    *bool        `json:is_marked`
	Email       string       `json:email`
	ActivatedAt sql.NullTime // Uses sql.NullTime for nullable time fields
	CreatedAt   time.Time    // Automatically managed by GORM for creation time
	UpdatedAt   time.Time    // Automatically managed by GORM for update time
}

// Like
type Like struct {
	gorm.Model
	ID          int          `json:id`
	FeedId      string       `json:feed_id`
	IsLike      *bool        `json:is_like`
	Email       string       `json:email`
	ActivatedAt sql.NullTime // Uses sql.NullTime for nullable time fields
	CreatedAt   time.Time    // Automatically managed by GORM for creation time
	UpdatedAt   time.Time    // Automatically managed by GORM for update time
}

// Reply
type Reply struct {
	gorm.Model
	ID           int          `json:id`
	FeedId       string       `json:feed_id`
	ReplyContent string       `json:reply_content`
	Email        string       `json:email`
	ActivatedAt  sql.NullTime // Uses sql.NullTime for nullable time fields
	CreatedAt    time.Time    // Automatically managed by GORM for creation time
	UpdatedAt    time.Time    // Automatically managed by GORM for update time
}
