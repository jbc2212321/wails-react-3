import React, {useState} from 'react';
import {Flex, Input, Splitter, Typography} from 'antd';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeHighlight from "rehype-highlight";
import rehypeColorChips from 'rehype-color-chips';

const {TextArea} = Input


export function MarkdownInput({value, onChange}) {
    return (<Flex vertical gap={32} style={{
        height: "100%",
    }}>
        <TextArea
            value={value}
            onChange={onChange}
            placeholder="输入markdown文本..."
            style={{
                height: "100%", resize: 'none',
            }}
        />
    </Flex>)
}


// 预览组件
export function MarkdownPreview({markdown}) {
    return (<div className="markdown-preview">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]}
                       rehypePlugins={[rehypeKatex, rehypeHighlight, rehypeColorChips]}>{markdown}</ReactMarkdown>


    </div>);
}


const Desc = (props) => (<Flex
    justify="center"
    align="center"
    style={{
        height: '100%',
    }}
>
    <Typography.Title
        type="secondary"
        level={5}
        style={{
            whiteSpace: 'nowrap',
        }}
    >
        Panel {props.text}
    </Typography.Title>
</Flex>);

export default function document() {
    const [markdown, setMarkdown] = useState('');
    return (
        <div
            style={{
                height: "100%", width: "100%", // padding: 2,
            }}
        >
            <Splitter
                style={{
                    height: "100%", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: 0,
                }}
            >
                <Splitter.Panel collapsible style={{
                    height: "100%", width: "100%",
                }}>
                    <MarkdownInput style={{
                        height: "100%", width: "100%",
                    }}
                                   value={markdown}
                                   onChange={(e) => setMarkdown(e.target.value)}
                    ></MarkdownInput>

                </Splitter.Panel>

                <Splitter.Panel collapsible style={{
                    height: "100%", width: "100%",
                }}>
                    <MarkdownPreview markdown={markdown}/>
                </Splitter.Panel>
            </Splitter>
        </div>

    )
}

