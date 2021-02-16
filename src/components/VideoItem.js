import React from 'react'
import { Row, Col } from 'antd';
import { Typography } from 'antd'

const { Text} = Typography;

const VideoItem = ({video,onVideoSelect}) => {
    return(
        <Row>
            <Col md={12}>
                <img style={{cursor:'pointer'}} onClick={()=>onVideoSelect(video)} src={video.snippet.thumbnails.medium.url}></img>
            </Col>
            <Col md={12}>
                <Text><b>{video.snippet.title}</b></Text>
            </Col>
        </Row>
    )
}

export default VideoItem
