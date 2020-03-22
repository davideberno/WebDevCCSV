import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const ButtonSearch = withStyles(theme => ({
  root: {
    width: 85,
    height: 56
  }
}))(Button);

class SearchButton extends React.Component {
  render() {
    const { onSearch, darkMode } = this.props;
    return (
      <ButtonSearch
        variant={"contained"}
        onClick={onSearch}
        color={darkMode ? "secondary" : "primary"}
      >
        Search
      </ButtonSearch>
    );
  }
}

export default SearchButton;
