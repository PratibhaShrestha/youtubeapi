import React from "react";
import { Checkbox } from "semantic-ui-react";
import PropTypes from "prop-types";

const OPTIONS = [
  { name: "Late Night with Seth Myers", id: "UCVTyTA7-g9nopHeHbeuvpRA" },
  { name: "The Daily Show with Trevor Noah", id: "UCwWhs_6x42TyRM4Wstoq8HA" },
  { name: "The Late Show with Stephen Colbert", id: "UCMtFAi84ehTSYSE9XoHefig" }
];

class SearchList extends React.Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option.name]: true
      }),
      {}
    )
  };

  handleCheckboxChange = (_, data) => {
    const { label } = data;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [label]: !prevState.checkboxes[label]
      }
    }));
  };

  createCheckbox = option => (
    <Checkbox
      className="item"
      toggle
      key={option.name}
      label={option.name}
      onChange={this.handleCheckboxChange}
      checked={this.state.checkboxes[option.name]}
    />
  );
  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  // handling the search..
  handleSearch = () => {
    var channelIds = [];
    OPTIONS.forEach(option => {
      if (this.state.checkboxes[option.name]) {
        channelIds.push(option.id);
      }
    });
    this.props.onSearch(channelIds);
  };

  render() {
    return (
      <div className="ui segment">
        <div className="ui header">Video Search Recommendation</div>
        <div role="list" className="ui list">
          {this.createCheckboxes()}

          <div role="listitem" className="item">
            <button
              className="ui button compact"
              onClick={this.handleSearch}
              style={{ marginTop: "1em" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

SearchList.propTypes = {
  onSearch: PropTypes.func
};

export default SearchList;
