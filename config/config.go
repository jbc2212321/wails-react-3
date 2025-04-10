package config

import (
	"sync"

	"github.com/jinzhu/configor"
)

var (
	// 不区分环境配置
	config *Config
	once   sync.Once
)

var configs map[string]*Config

type Config struct {
	DouBaoFunctionCallModel *Model `yaml:"dou_bao_function_call_model,omitempty"`
	DouBaoVisionModel       *Model `yaml:"dou_bao_vision_model,omitempty"`
	DeepSeekR1Model         *Model `yaml:"deep_seek_r1_model,omitempty"`
	QianWenVisionModel      *Model `yaml:"qian_wen_vision_model,omitempty"`
}

type Model struct {
	ModelID string `yaml:"model_id"`
	ApiKey  string `yaml:"api_key"`
	Region  string `yaml:"region"`
	BaseURL string `yaml:"base_url"`
}

func InitConfig() {
	conf := &Config{}

	configNew := configor.New(
		&configor.Config{Environment: "production", Debug: true},
	)
	configPath := "../conf/config.yaml"
	configDevPath := "./conf/config.yaml"

	if err := configNew.Load(
		conf, configPath, configDevPath,
	); err != nil {
		panic(err)
	}
	config = conf

}

func GetConfig() *Config {
	return config
}
