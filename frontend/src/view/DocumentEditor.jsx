import React, {useEffect, useState} from 'react';
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {Flex, Input, Splitter, Typography} from 'antd';
import {Editor, Toolbar} from '@wangeditor/editor-for-react'
import {Boot, createEditor} from '@wangeditor/editor'
import markdownModule from '@wangeditor/plugin-md'


export default function DocumentEditor() {
    Boot.registerModule(markdownModule)

    let htmlContent = ''


    // editor 实例
    const [editor, setEditor] = useState(null)                   // JS 语法

    // 编辑器内容
    const [html, setHtml] = useState(htmlContent)


    // // 模拟 ajax 请求，异步设置 html
    // useEffect(() => {
    //     setTimeout(() => {
    //         setHtml('')
    //     }, 1500)
    // }, [])

    // 工具栏配置
    const toolbarConfig = {}
    // 编辑器配置
    const editorConfig = {
        placeholder: '请输入内容...',
        MENU_CONF: {
            uploadImage: {
                // 图片文件上传接口地址
                timeout: 5 * 1000, // 5s
                // fieldName 要与接口规定的Form Data文件字段名一致
                base64LimitSize: 5 * 1024 * 1024, // 5M
                maxFileSize: 10 * 1024 * 1024, // 10M
                // 若接口返回的数据结构与官方规定的不一致, 则需要 customInsert 方法将返回的路径传给编辑器
                customInsert(res, insertFn) {
                    const url = res.data
                    insertFn(url)
                },
            },
        },
    }


    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])


    return (

        <div id="document_editor"
             style={{
                 height: "100%", width: "100%", // padding: 2,
                 overflow: "auto"
             }}
        >
            <div style={{border: '1px solid #ccc', zIndex: 100, height: '100%'}}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{borderBottom: '1px solid #ccc'}}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={
                        (editor) => {
                            setHtml(editor.getHtml())
                        }
                    }
                    mode="default"
                    style={{overflowY: 'hidden'}}
                />
            </div>
        </div>
    )
}

