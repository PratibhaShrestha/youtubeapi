import React from "react";
import { renderHTML } from "../utils/helpers";

const VideoItem = ({ video, onHandleClick }) => {
  return (
    <div
      onClick={() => onHandleClick(video)}
      className="video-item item middle aligned"
      style={{
        minHeight: 80,
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="content">
        <div className="header">{renderHTML(video.snippet.title)}</div>
        <div>{video.snippet.publishedAt}</div>
      </div>
    </div>
  );
};

export default VideoItem;
