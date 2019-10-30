import React from "react";
import youtubeapi from "./api/youtubeapi";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onSearch = async () => {
    const searchTerm = "trevor";

    const response = await youtubeapi.get("/search", {
      params: {
        q: searchTerm
      }
    });

    if (response !== null) {
      console.log("response: ", response.data.items);
      this.setState({
        videos: response.data.items
      });
    }
  };

  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1em" }}>
        <div className="ui grid">
          <div className="row">
            <button>Search</button>
          </div>

          <div className="ui row">
            <div className="eleven wide column" onClick={this.onSearch}>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
