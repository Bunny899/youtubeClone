import React from 'react';
import './App.css';
import youtube from "./api/youtube";
import { Row, Col } from 'antd';
import { SearchBar, VideoList, VideoDetail } from "./components";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount()
  {
    this.handleSubmit('javascript')
  }
  
  onVideoSelect = (video) => {
    this.setState({selectedVideo:video});
  }
  handleSubmit = async (searchItem) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        key: 'AIzaSyADuVxDDCu0laGkzBR61xDn-4Kf5vYT-mY',
        q:searchItem
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }
  render() {
    const { selectedVideo,videos } = this.state;
    return (
      <div className="App">
        <Row>
          <Col span={24}><SearchBar onFormSubmit={this.handleSubmit} /></Col>
        </Row>
        <Row>
          <Col span={16}><VideoDetail video={selectedVideo}/></Col>
          <Col span={8}><VideoList videos={videos} onVideoSelect={this.onVideoSelect}/></Col>
        </Row>
      </div>
    );
  }
}

export default App;
