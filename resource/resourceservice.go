package resource

import (
	"context"
	"fmt"
	"os"
	"wails-react-3/config"

	"github.com/sirupsen/logrus"
	"github.com/wailsapp/wails/v3/pkg/application"
)

type ResourceService struct {
	execPath string // 可执行文件所在位置
}

func (r *ResourceService) InitResource() {
	fmt.Println("path:", r.execPath)
	config.InitConfig()
	fmt.Println(config.GetConfig())

}

func NewResourceService() *ResourceService {
	path, err := os.Executable()
	if err != nil {
		logrus.Fatal(err)
	}
	return &ResourceService{
		execPath: path,
	}
}

func (r *ResourceService) OnStartup(ctx context.Context, options application.ServiceOptions) error {

	r.InitResource()

	return nil
}
