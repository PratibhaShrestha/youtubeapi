import React from "react";
import { Checkbox } from "semantic-ui-react";
import PropTypes from "prop-types";

const OPTIONS = [
  "Late Night with Seth Myers",
  "The Daily Show with Trevor Noah",
  "The Late Show with Stephen Colbert"
];

class SearchList extends React.Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  //To select/deselect all the checkboxes at one time
  changeStateOfCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.changeStateOfCheckboxes(true);

  deselectAll = () => this.changeStateOfCheckboxes(false);

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
      key={option}
      label={option}
      onChange={this.handleCheckboxChange}
      checked={this.state.checkboxes[option]}
    />
  );
  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    const { onSearch } = this.props;

    return (
      <div className="ui segment">
        <div className="ui header">Video Search Recommendation</div>
        <div role="list" className="ui list">
          {this.createCheckboxes()}

          <div role="listitem" className="item">
            <button
              className="ui button compact"
              onClick={onSearch}
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
