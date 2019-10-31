import React from "react";
import PropTypes from "prop-types";
import { renderHTML } from "../utils/helpers";
import { Image } from "semantic-ui-react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <div>Click on a video from list to play...</div>
        <Image src="https://react.semantic-ui.com/images/image-16by9.png" />
      </div>
    );
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
