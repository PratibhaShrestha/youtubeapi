import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getVideosForChannel } from "./api/youtubeapi";
import { STORAGE_BLACKLIST_IDS } from "./configs/constants";

import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import SearchList from "./components/SearchList";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    hiddenIds: [],
    fetching: null
  };

  componentDidMount() {
    // CLEARING the localStorage for testing!
    // IMP:: Comment out the 2 lines below ,if you want to clear localstorage.
    // Develop part START
    /*
    localStorage.clear();
    toast.success("All hiddenIds are cleared from storage");
    */
    // Develop part END

    // Getting the hiddenIds from storage and setting it to STATE
    this.setState({
      hiddenIds: JSON.parse(localStorage.getItem(STORAGE_BLACKLIST_IDS)) || []
    });
  }

  // onSearch from the SearchList
  onSearch = channelIDs => {
    this.setState({ videos: [], fetching: true }, () => {
      this._searchVideosForChannelId(channelIDs);
    });
  };

  // onHandleClick of a video, should be selecting it to play, and also set it to blacklist
  onHandleClick = video => {
    this.setState(
      prevState => ({ selectedVideo: video }),
      () => {
        this._setIdToHiddenlist(video.id.videoId);
      }
    );
  };

  // this should be done as promise again, since it is repeated twice.
  _getVideoForChannel = (channelId, maxResults) => {
    getVideosForChannel(channelId, maxResults)
      .then(videos => {
        this.setState(prevState => ({
          videos: [...prevState.videos, ...videos],
          fetching: false
        }));
      })
      .catch(error => {
        toast.dismiss();
        toast.error(error.message);
        this.setState({ fetching: false });
      });
  };

  // it will sarch video for a particular channelID ,,, and if the channelId is empty, it will just return
  // Also it will check how many videos are in hiddenlist, and download extras to show in the list as compensation
  _searchVideosForChannelId = channelIDs => {
    if (channelIDs === null || channelIDs.length === 0) {
      this.setState({ fetching: false });
      return;
    }
    channelIDs.forEach(channelId => {
      getVideosForChannel(channelId, 10)
        .then(videos => {
          // checking if the videos are in hiddenList or not!
          const hiddenCount = videos.filter(video =>
            this.state.hiddenIds.some(hidden => hidden === video.id.videoId)
          );
          // if any videos are hidden, load the remainig number again + 10...
          if (hiddenCount.length > 0) {
            this._getVideoForChannel(channelId, 10 + hiddenCount.length);
          } else {
            // if nothing is hidden, then store the videos.. otherwise , all videos will be saved in _getVideoForChannel
            this.setState(prevState => ({
              videos: [...prevState.videos, ...videos],
              fetching: false
            }));
          }
        })
        .catch(error => {
          toast.dismiss();
          toast.error(error.message);
          this.setState({ fetching: false });
        });
    });
  };

  // Sets an id of a video ( video.id.videoId) as either played or Hidden.
  _setIdToHiddenlist = videoId => {
    if (videoId && videoId !== null) {
      this.setState(
        prevState => ({
          hiddenIds: [...prevState.hiddenIds, videoId]
        }),
        () => {
          localStorage.setItem(
            STORAGE_BLACKLIST_IDS,
            JSON.stringify(this.state.hiddenIds)
          );
        }
      );
    } else {
      console.error("videoId is null !");
      toast.dismiss();
      toast.error(
        "Cannot perform this action. It might be playlist or unplayable."
      );
    }
  };

  // method to set id to HiddenIds..
  onBlackListVideo = id => {
    this._setIdToHiddenlist(id);
  };

  // Renders, SectionList, DetailList and DetailView !
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
              {this.state.fetching && (
                <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer>
              )}

              <VideoList
                videos={this.state.videos}
                onCloseClick={this.onBlackListVideo}
                handleVideoSelect={this.onHandleClick}
                hiddenIds={this.state.hiddenIds}
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
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}

export default App;
