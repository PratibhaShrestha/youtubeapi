import React from "react";
import PropTypes from "prop-types";
import { renderHTML } from "../utils/helpers";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Click on a video from list to play...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{renderHTML(video.snippet.title)}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.object
};

export default VideoDetail;
