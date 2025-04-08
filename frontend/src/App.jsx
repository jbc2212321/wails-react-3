import React, {useState} from 'react';
import './App.css'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    FileTextOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import {BrowserRouter, Navigate, useNavigate, NavLink, Route, Routes} from "react-router-dom"
import Blog, {AddBlogButton} from "./view/Blog.jsx";
import Document from "./view/Document.jsx";


const {Header, Sider, Content} = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const navigate = useNavigate()

    const pushDocument = () => {
        navigate(`/document`)
    }
    const pushBlog = () => {
        navigate(`/blog`)
    }

    return (
        <div id="App">
            <Layout id="BasicLayout">

                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical"/>
                    <Menu
                        // onClick={}
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <FileTextOutlined/>,
                                label: '博客',
                                onClick: () => pushBlog()
                            },
                            // {
                            //     key: '2',
                            //     icon: <VideoCameraOutlined/>,
                            //     label: 'nav 2',
                            // },
                            // {
                            //     key: '3',
                            //     icon: <UploadOutlined/>,
                            //     label: 'nav 3',
                            // },
                        ]}
                    />
                </Sider>
                <Layout>
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

                            <Route path="/blog" element={<Blog/>}/>
                            <Route path="/document" element={<Document/>}/>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </div>

    );
};
export default App;