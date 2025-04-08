package sqlite3

import (
	_ "github.com/mattn/go-sqlite3"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"sync"
)

var (
	//documentDB                 *sql.DB
	documentDB *gorm.DB

	doGetSqlite3DocumentDBOnce sync.Once
)

func InitDocumentDB() *gorm.DB {

	doGetSqlite3DocumentDBOnce.Do(func() {
		db, err := gorm.Open(sqlite.Open("./sqlite3/BlogDB.db"), &gorm.Config{})
		if err != nil {
			panic(err)
		}
		//// 设置数据库连接池参数
		//sqlDB, err := db.DB()
		//if err != nil {
		//	panic(err)
		//}
		//sqlDB.SetMaxIdleConns(10)
		//sqlDB.SetMaxOpenConns(100)
		//sqlDB.SetConnMaxLifetime(time.Hour)
		//documentDB = sqlDB
		documentDB = db
	})

	return documentDB
}

//func GetSqlite3DocumentDB(ctx context.Context) *sql.DB {
//
//	doGetSqlite3DocumentDBOnce.Do(func() {
//		db, err := sql.Open("sqlite3", "BlogDB.db")
//
//		if err != nil {
//			panic(err)
//		}
//		documentDB = db
//	})
//
//	return documentDB
//}
