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
	content     string       `json:content`
	image       string       `json:image`
	Email       string       `json:email`
	ActivatedAt sql.NullTime // Uses sql.NullTime for nullable time fields
	CreatedAt   time.Time    // Automatically managed by GORM for creation time
	UpdatedAt   time.Time    // Automatically managed by GORM for update time

}
