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
