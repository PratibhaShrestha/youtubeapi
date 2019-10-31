import React from "react";
import { Image } from "semantic-ui-react";
import PropTypes from "prop-types";

import { renderHTML } from "../utils/helpers";

// videoDetail component to play the video selected
const VideoDetail = ({ video }) => {
  if (!video) {
    // show an placeholder image if the video is not set !
    return (
      <div>
        <div>Click on a video from list to play...</div>
        <Image src="https://react.semantic-ui.com/images/image-16by9.png" />
      </div>
    );
  }

  // using the iFrame to show the Embeded video.. Can also use <Embed from semantic.ui
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
