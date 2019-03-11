import React, { Component } from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";

class App extends Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("children stories");
  }

  onTermSubmit = async term => {
    const {
      data: { items }
    } = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: items, selectedVideo: items[0] });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
