import React, {useState} from 'react';
import './App.css'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    FileTextOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import {BrowserRouter, Navigate, useNavigate, NavLink, Route, Routes} from "react-router-dom"
import Blog from "./view/Blog.jsx";
import DocumentEditor from "./view/DocumentEditor.jsx";
import Setting from "./view/Setting.jsx";


const {Header, Sider, Content} = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const navigate = useNavigate()

    const pushSetting = () => {
        navigate(`/setting`)
    }
    const pushBlog = () => {
        navigate(`/blog`)
    }

    return (
        <div id="App">
            <Layout id="BasicLayout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>

                <Layout style={{overflow: "auto", height: "100%" ,width:"100%"}}>
                    <Sider trigger={null}
                           collapsible
                           collapsed={collapsed}
                           collapsedWidth="0"
                           width="100"
                           style={{overflow: "auto", height: "100%"}}>

                        <div className="demo-logo-vertical"/>
                        <Menu
                            // onClick={}
                            style={{"overflow": "auto", height: "100%"}}
                            theme="light"
                            mode="inline"
                            inlineIndent="10"
                            defaultSelectedKeys={['1']}
                            items={[
                                {
                                    key: '1',
                                    icon: <FileTextOutlined/>,
                                    label: '博客',
                                    onClick: () => pushBlog()
                                },
                                {
                                    key: '2',
                                    icon: <SettingOutlined />,
                                    label: '设置',
                                    onClick: () => pushSetting()
                                },
                                // {
                                //     key: '3',
                                //     icon: <UploadOutlined/>,
                                //     label: 'nav 3',
                                // },
                            ]}

                        />
                    </Sider>

                    <Content
                        style={{
                            margin: '30px 30px',
                            padding: 0,
                            minHeight: 100,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<Blog/>}/>
                            <Route path="/blog" element={<Blog/>}/>
                            <Route path="/document" element={<Document/>}/>
                            <Route path="/document-editor" element={<DocumentEditor/>}/>
                            <Route path="/setting" element={<Setting/>}/>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </div>

    );
};
export default App;