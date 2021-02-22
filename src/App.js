import React , {useState,useEffect} from 'react';
import './App.css';
import youtube from "./api/youtube";
import { Row, Col } from 'antd';
import { SearchBar, VideoList, VideoDetail } from "./components";
const App = () =>{
  // state = {
  //   videos: [],
  //   selectedVideo: null
  // }
  const [videos,setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] = useState(null);

  // componentDidMount()
  // {
  //   this.handleSubmit('javascript')
  // }
  useEffect(()=>{
    handleSubmit('javascript')
  },[])
  
  const onVideoSelect = (video) => {
    // this.setState({selectedVideo:video});
    setSelectedVideo(video);
  }
  const handleSubmit = async (searchItem) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        key: 'AIzaSyADuVxDDCu0laGkzBR61xDn-4Kf5vYT-mY',
        q:searchItem
      }
    });
    // this.setState({
    //   videos: response.data.items,
    //   selectedVideo: response.data.items[0]
    // });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }
    // const { selectedVideo,videos } = this.state;
    return (
      <div className="App">
        <Row>
          <Col span={24}><SearchBar onFormSubmit={handleSubmit} /></Col>
        </Row>
        <Row>
          <Col span={16}><VideoDetail video={selectedVideo}/></Col>
          <Col span={8}><VideoList videos={videos} onVideoSelect={onVideoSelect}/></Col>
        </Row>
      </div>
    );
  }

export default App;
