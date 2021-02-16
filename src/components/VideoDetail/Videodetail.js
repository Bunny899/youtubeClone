import React from 'react'
import { Space, Typography } from 'antd'

const { Text} = Typography;

function Videodetail({ video }) {

    if (!video) return <div>Loading...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <Space style={{marginTop:'50px'}}>
                <iframe height="300px" width="500px" src={videoSrc}></iframe>
            </Space>
            <Space style={{marginBottom:'50px'}}>
                <Text>{video.snippet.title} - {video.snippet.channelTitle}</Text>
                <Text>{video.snippet.description}</Text>
            </Space>
        </div>
    )
}

export default Videodetail
