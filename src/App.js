import React from "react";

import youtubeapi from "./api/youtubeapi";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import SearchList from "./components/SearchList";
import { STORAGE_BLACKLIST_IDS } from "./configs/constants";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    blacklistIds: []
  };

  componentDidMount() {
    // CLEARING the localStorage for testing!
    // localStorage.clear();

    this.setState({
      blacklistIds:
        JSON.parse(localStorage.getItem(STORAGE_BLACKLIST_IDS)) || []
    });
  }

  onSearch = channelIDs => {
    this.setState({ videos: [] }, () => {
      this._searchVideosForChannelId(channelIDs);
    });
  };

  onHandleClick = video => {
    console.log("onHandleClidk here ", video);
    this.setState(
      prevState => ({ selectedVideo: video }),
      () => {
        this._setIdToBlacklist(video.id.videoId);
      }
    );
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

  _setIdToBlacklist = videoId => {
    if (videoId && videoId !== null) {
      this.setState(
        prevState => ({
          blacklistIds: [...prevState.blacklistIds, videoId]
        }),
        () => {
          localStorage.setItem(
            STORAGE_BLACKLIST_IDS,
            JSON.stringify(this.state.blacklistIds)
          );
        }
      );
    } else {
      console.error("videoId is null !");
    }
  };

  onBlackListVideo = id => {
    this._setIdToBlacklist(id);
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
                videos={this.state.videos}
                onCloseClick={this.onBlackListVideo}
                handleVideoSelect={this.onHandleClick}
                blacklistIds={this.state.blacklistIds}
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
