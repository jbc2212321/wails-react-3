package blog

import (
	"context"
	"wails-react-3/sqlite3"
)

type BlogService struct {
	ctx context.Context
}

func (b *BlogService) ListDocument() ([]*sqlite3.Document, error) {
	return sqlite3.ListDocument(b.ctx)
}

func (b *BlogService) HelloWorld() string {
	return "Hello World"
}

func NewBlog() *BlogService {
	return &BlogService{ctx: context.Background()}
}
