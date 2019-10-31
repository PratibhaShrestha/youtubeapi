import React from "react";
import PropTypes from "prop-types";

import { renderHTML, formatDate } from "../utils/helpers";

import { Popup, Icon, Item, Label } from "semantic-ui-react";

const VideoItem = ({ video, onHandleClick, onCloseClick }) => {
  return (
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
