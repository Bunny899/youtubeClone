import React from 'react'
import VideoItem from "../VideoItem";

function Videolist({videos, onVideoSelect}) {
    const listOfVideos = videos.map((video,id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
    return (
        <div>
            <h1>VideoList</h1>
            {listOfVideos}
        </div>
    );
}

export default Videolist
