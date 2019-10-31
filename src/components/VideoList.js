import React from "react";
import VideoItem from "./VideoItem";
import PropTypes from "prop-types";

const VideoList = ({ videos, handleVideoSelect, blacklistIds }) => {
  if (videos === null || videos.length < 1) {
    return <div>No videos, click the search !</div>;
  }

  const sortAccToPublishedAt = (a, b) =>
    new Date(b.snippet.publishedAt).getTime() -
    new Date(a.snippet.publishedAt).getTime();

  const blackListFilter = item => {
    return !blacklistIds.some(id => id === item.id.videoId);
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
        />
      );
    });
  return (
    <div className="ui celled divided list selection">{renderedVideos}</div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
  blacklistIds: PropTypes.array,
  handleVideoSelect: PropTypes.func
};

export default VideoList;
