package sqlite3

import (
	"context"
)

type Document struct {
	ID          int64  `json:"id" gorm:"id"` // 主键id
	Title       string `json:"title" gorm:"title"`
	Description string `json:"description" gorm:"description"`
	Content     string `json:"content" gorm:"content"`
	Tag         string `json:"tag" gorm:"tag"`
	Cover       string `json:"cover" gorm:"cover"`
	CreateTime  int64  `json:"create_time" gorm:"create_time"` // 注册时间

}

func (Document) TableName() string {
	return "Document"
}

//func ListDocument(ctx context.Context) ([]*Document, error) {
//	db := GetSqlite3DocumentDB(ctx)
//	rows, err := db.Query("SELECT * FROM Document")
//
//	for rows.Next() {
//		doc :=&Document{}
//		err = rows.Scan(doc)
//		if err != nil {
//			fmt.Println(err)
//		}
//		fmt.Printf("%d %s \n", doc.ID, doc.Title)
//	}
//
//	return nil, nil
//}

func ListDocument(ctx context.Context) ([]*Document, error) {
	var documentList []*Document
	db := InitDocumentDB()

	err := db.Model(&Document{}).Order("create_time desc").Find(&documentList).Error
	if err != nil {
		return nil, err
	}

	return documentList, nil
}
