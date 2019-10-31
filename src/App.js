import React from "react";

import youtubeapi from "./api/youtubeapi";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import SearchList from "./components/SearchList";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onSearch = channelIDs => {
    this.setState({ videos: [] }, () => {
      this._searchVideosForChannelId(channelIDs);
    });
  };

  _searchVideosForChannelId = channelIDs => {
    channelIDs.forEach(async channelId => {
      const response = await youtubeapi.get("/search", {
        params: {
          channelId: channelId,
          order: "date"
        }
      });

      if (response !== null) {
        this.setState(prevState => ({
          videos: [...prevState.videos, ...response.data.items]
        }));
      }
    });
  };

  onHandleClick = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "3em" }}>
        <SearchList onSearch={this.onSearch} />
        <div className="ui segment grid">
          <div className="ui row">
            <div
              className="six wide column"
              style={{ backgroundColor: "#fafafa", padding: "1.2em" }}
            >
              <VideoList
                handleVideoSelect={this.onHandleClick}
                videos={this.state.videos}
              />
            </div>

            <div
              className="ten wide column"
              style={{ backgroundColor: "#f2f2f2", padding: "1.2em" }}
            >
              <VideoDetail video={this.state.selectedVideo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
