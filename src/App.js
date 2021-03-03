import React from 'react';
import youtube from "./api/youtube";
import { Row, Col } from 'antd';
import { SearchBar, VideoList, VideoDetail } from "./components";
import { showVideo } from "./redux/action";
import { connect } from "react-redux";
class App extends React.Component {

  state = {
    selectedVideo: null
  }

  componentDidMount() {
    this.handleSubmit('javascript')
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }
  
  handleSubmit = async (searchItem) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        key: 'AIzaSyBan8u-be3yuIGlvo7yJhAxomx1pmutKcM',
        q: searchItem
      }
    });
    const videoData = response.data.items;
    this.props.showVideo(videoData)
    this.setState({
      selectedVideo: response.data.items[0]
    });
  }
  render() {
    const { selectedVideo } = this.state;
    return (
      <div className="App">
        <Row>
          <Col span={24}><SearchBar onFormSubmit={this.handleSubmit} /></Col>
        </Row>
        <Row>
          <Col span={16}><VideoDetail video={selectedVideo} /></Col>
          <Col span={8}><VideoList onVideoSelect={this.onVideoSelect} /></Col>
        </Row>
      </div>
    );
  }
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
export default connect(mapStateToProps,mapDispatchToProps)(App);