import React from "react";
import VideoItem from "./VideoItem";
import PropTypes from "prop-types";
import { Transition, List } from "semantic-ui-react";

const VideoList = ({ videos, handleVideoSelect, hiddenIds, onCloseClick }) => {
  if (videos === null || videos.length < 1) {
    return <div>No videos, click the search !</div>;
  }

  const sortAccToPublishedAt = (a, b) =>
    new Date(b.snippet.publishedAt).getTime() -
    new Date(a.snippet.publishedAt).getTime();

  const blackListFilter = item => {
    return !hiddenIds.some(id => id === item.id.videoId);
  };

  const renderedVideos = videos
    .sort(sortAccToPublishedAt)
    .filter(blackListFilter)
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
