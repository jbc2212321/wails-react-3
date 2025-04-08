import React from 'react';
import {Card, Col, Row, Avatar} from 'antd';

const {Meta} = Card;
import {useState,useEffect} from 'react';
import { useAsync } from "react-async"
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {BrowserRouter, Navigate, useNavigate, NavLink, Route, Routes} from "react-router-dom"
import {BlogService} from "../../bindings/wails-react-3/blog";
import {FloatButton} from 'antd';


export function AddBlogButton() {
    const navigate = useNavigate()

    const pushDocument = () => {
        navigate(`/document`)
    }

    return (
        <FloatButton onClick={() => pushDocument()} tooltip={<div>新建Blog</div>}
                     style={{
                         width: 70,
                         height: 70,
                         // "margin-bottom": 70,
                         "marginBottom": 70,
                         "marginRight": 70,

                     }}
        />
    );
}


export function BlogCard({cover, title, description}) {
    return (
        <Col span={12}>
            <Card
                style={{
                    width: 300,
                }}
                cover={
                    <img
                        alt="example"
                        src={cover}
                    />
                }
                actions={[
                    <SettingOutlined key="setting"/>,
                    <EditOutlined key="edit"/>,
                    <EllipsisOutlined key="ellipsis"/>,
                ]}
            >
                <Meta
                    // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"/>}
                    title={title}
                    description={description}
                />
            </Card>

        </Col>
    );
}


export default function Blog() {

    const [documentList, setDocumentList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await BlogService.ListDocument();
                setDocumentList(res); // 更新状态，触发重新渲染
                console.log("数据已加载:", res);
            } catch (error) {
                console.error("加载失败:", error);
            }
        };
        fetchData();
    }, []); // 空依赖数组表示只在组件挂载时执行


    return (
        <div style={{
            padding: 24,
        }}>

            <Row gutter={[32, 32]} style={{
                "marginLeft": 32,
            }}>
                <Col span={12}>
                    <Card
                        style={{
                            width: 300,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting"/>,
                            <EditOutlined key="edit"/>,
                            <EllipsisOutlined key="ellipsis"/>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"/>}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>

                {/*<BlogCard title={"Card title"} description={documentList[0].description}></BlogCard>*/}

            </Row>
            <AddBlogButton></AddBlogButton>
        </div>
    )
}

