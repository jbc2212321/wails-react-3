package sqlite3

import (
	"context"
	"database/sql"
	"fmt"
	"testing"

	_ "github.com/mattn/go-sqlite3"
)

func TestConnect(t *testing.T) {
	db, err := sql.Open("sqlite3", ":memory:")

	if err != nil {
		fmt.Println(err)
	}

	defer db.Close()

	var version string
	err = db.QueryRow("SELECT SQLITE_VERSION()").Scan(&version)

	if err != nil {
		fmt.Println(err)

	}

	fmt.Println(version)

}

func TestQuery(t *testing.T) {
	db, err := sql.Open("sqlite3", "testDB.db")

	if err != nil {
		fmt.Println(err)
	}

	defer func(db *sql.DB) {
		err := db.Close()
		if err != nil {
			fmt.Println(err)
		}
	}(db)

	rows, err := db.Query("SELECT ID, NAME FROM COMPANY")
	if err != nil {
		fmt.Println(err)
	}

	defer rows.Close()

	for rows.Next() {
		var id int
		var name string
		//var salary float64

		err = rows.Scan(&id, &name)
		if err != nil {
			fmt.Println(err)
		}
		fmt.Printf("%d %s \n", id, name)
	}

}

func TestList(t *testing.T) {
	documents, err := ListDocument(context.Background())
	if err != nil {
		return
	}
	for _, document := range documents {
		fmt.Println(document)
	}
}
