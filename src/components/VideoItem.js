import React from "react";
import { Popup, Icon, Item, Label } from "semantic-ui-react";
import PropTypes from "prop-types";

import { renderHTML, formatDate } from "../utils/helpers";

// video Item to show individual video title, publishedAt in the list.
// Not showing the image, since it is not needed !
// props are passed from the calling Component!
const VideoItem = ({ video, onHandleClick, onCloseClick }) => {
  return (
    //done inline styling , could have had it in separate style .js file
    <Item
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <Item.Content
        style={{
          minHeight: 100,
          width: "100%"
        }}
        onClick={() => onHandleClick(video)}
      >
        <Item.Header>{renderHTML(video.snippet.title)}</Item.Header>
        <Item.Meta>{formatDate(video.snippet.publishedAt)}</Item.Meta>
        <Item.Extra>
          <Label icon="video" content={video.snippet.channelTitle} />
        </Item.Extra>
      </Item.Content>

      {/* Popup to show hint on what the icon does */}
      <Popup
        content="Hide video from list"
        trigger={
          <Icon
            floated="top"
            size="large"
            name="thumbs down outline"
            onClick={() => {
              onCloseClick(video.id.videoId);
            }}
          />
        }
      />
    </Item>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object,
  onHandleClick: PropTypes.func,
  onCloseClick: PropTypes.func
};

export default VideoItem;
