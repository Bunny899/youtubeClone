import React from 'react'
import VideoItem from "../VideoItem";
import { showVideo } from "../../redux/action";
import { connect } from "react-redux";
function Videolist(props) {
    console.log(props)
    const listOfVideos = props.videoList.map((video,id) => <VideoItem onVideoSelect={props.onVideoSelect} key={id} video={video}/>)
    return (
        <div>
            <h1>VideoList</h1>
            {listOfVideos}
        </div>
    );
}
const mapStateToProps = state => {
    return {
      videoList : state.data
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      showVideo: (videoData) => dispatch(showVideo(videoData))
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Videolist);