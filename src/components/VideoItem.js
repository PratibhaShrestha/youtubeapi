import React from "react";

const VideoItem = ({ video, onHandleClick }) => {
  return (
    <div onClick={() => onHandleClick(video)} className="video-item item">
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div>{video.snippet.publishedAt}</div>
      </div>
    </div>
  );
};

export default VideoItem;
