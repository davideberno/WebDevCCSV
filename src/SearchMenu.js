import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

const StyledMenu = withStyles({
  list: {
    padding: "0"
  }
})(Menu);

const SearchMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = event => {
    props.onCheck({ [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        color={props.darkMode ? "secondary" : "primary"}
        variant={"contained"}
        onClick={handleClick}
      >
        Search options
      </Button>

      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.values.map((el, i) => (
          <MenuItem
            key={i}
            onClick={handleClose}
            style={{
              backgroundColor: props.darkMode && "#1b3a4c",
              color: props.darkMode && "#02e2f2"
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={props[`checked${el}`]}
                  onChange={handleChange}
                  name={`checked${el}`}
                  color={props.darkMode ? "secondary" : "primary"}
                />
              }
              label={el}
            />
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default SearchMenu;
