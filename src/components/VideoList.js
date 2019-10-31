import React from "react";
import VideoItem from "./VideoItem";
import PropTypes from "prop-types";

const VideoList = ({ videos, handleVideoSelect }) => {
  if (videos === null || videos.length < 1) {
    return <div>no videos, click the search !</div>;
  }
  const renderedVideos = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onHandleClick={handleVideoSelect}
      />
    );
  });
  return (
    <div className="ui celled divided list selection">{renderedVideos}</div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
  handleVideoSelect: PropTypes.func
};

export default VideoList;
