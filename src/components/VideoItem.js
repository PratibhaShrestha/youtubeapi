import React from "react";
import { renderHTML, formatDate } from "../utils/helpers";

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

        <div>{formatDate(video.snippet.publishedAt)}</div>
        <div className="extra">
          <div className="ui label">
            <i aria-hidden="true" className="video icon"></i>
            {video.snippet.channelTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
