import React from "react";
import PropTypes from "prop-types";
import { Transition, List } from "semantic-ui-react";

import VideoItem from "./VideoItem";

// videolist item for showing the list of videos for the channel/s selected !
const VideoList = ({ videos, handleVideoSelect, hiddenIds, onCloseClick }) => {
  if (videos === null || videos.length < 1) {
    return <div>No videos, click the search !</div>;
  }

  /**
   * Sorts the items according to publishAt desc
   */
  const sortAccToPublishedAt = (a, b) =>
    new Date(b.snippet.publishedAt).getTime() -
    new Date(a.snippet.publishedAt).getTime();

  /**
   * Filter to filter-out the videos that are in hiddenlist
   */
  const hiddenIDsFilter = item => {
    return !hiddenIds.some(id => id === item.id.videoId);
  };

  /**
   * Rendering the videos , sorting, filtering and also showing only top 10 .
   */
  const renderedVideos = videos
    .sort(sortAccToPublishedAt)
    .filter(hiddenIDsFilter)
    .slice(0, 10)
    .map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onHandleClick={handleVideoSelect}
          onCloseClick={onCloseClick}
        />
      );
    });
  return (
    <Transition.Group
      as={List}
      animation="drop"
      duration={300}
      divided
      selection
      verticalAlign="middle"
    >
      {renderedVideos}
    </Transition.Group>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
  hiddenIds: PropTypes.array,
  handleVideoSelect: PropTypes.func,
  onCloseClick: PropTypes.func
};

export default VideoList;
