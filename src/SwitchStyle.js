import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const CustomSwitch = withStyles({
  switchBase: {
    color: "#007BA7"
  }
})(Switch);

class SwitchStyle extends Component {
  render() {
    const { darkMode, toggledarkMode } = this.props;
    return (
      <FormGroup>
        <FormControlLabel
          control={
            <CustomSwitch
              checked={darkMode}
              onChange={toggledarkMode}
              name="checked"
            />
          }
          label={
            <Typography color={darkMode ? "secondary" : "primary"}>
              {darkMode ? "Dark mode" : "Light mode"}
            </Typography>
          }
        />
      </FormGroup>
    );
  }
}

export default SwitchStyle;
