import React from "react";
import { Checkbox, Segment, Header, List, Button } from "semantic-ui-react";
import PropTypes from "prop-types";

// this will be the object to store name and id of the channels to show
const OPTIONS = [
  { name: "Late Night with Seth Myers", id: "UCVTyTA7-g9nopHeHbeuvpRA" },
  { name: "The Daily Show with Trevor Noah", id: "UCwWhs_6x42TyRM4Wstoq8HA" },
  { name: "The Late Show with Stephen Colbert", id: "UCMtFAi84ehTSYSE9XoHefig" }
];

class SearchList extends React.Component {
  // creates an object named checkboxes in state with name and value ( by default is true)
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option.name]: true
      }),
      {}
    )
  };

  // onChange , first params is Event and second is the data info about the checkbox
  handleCheckboxChange = (_, data) => {
    const { label } = data;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [label]: !prevState.checkboxes[label]
      }
    }));
  };

  // Creates a checkbox with label, checked value and onChange listener
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

  // creating checkboxes depending on the OPTIONS
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
      <Segment>
        <Header>Video Search Recommendation</Header>
        <List>
          {this.createCheckboxes()}
          <List.Item>
            <Button
              content="Search"
              onClick={this.handleSearch}
              style={{ marginTop: "1em" }}
            />
          </List.Item>
        </List>
      </Segment>
    );
  }
}

SearchList.propTypes = {
  onSearch: PropTypes.func
};

export default SearchList;
