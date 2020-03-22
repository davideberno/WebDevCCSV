import React from "react";
import result from "./data.json";
import InputField from "./InputField";
import SearchButton from "./SearchButton";
import ShowResults from "./ShowResults";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SwitchStyle from "./SwitchStyle";
import SearchMenu from "./SearchMenu";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#007BA7"
    },
    secondary: {
      main: "#02e2f2"
    }
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

class App extends React.Component {
  state = {
    results: result.data,
    darkMode: false,
    values: ["Sphere", "Cylinder", "Addition"],
    inputSphere: 0,
    inputCylinder: 0,
    inputAddition: 0,
    checkedSphere: true,
    checkedCylinder: false,
    checkedAddition: false
  };
  findResults = (inpSphere, inpCylinder, inpAddition) => {
    const { checkedSphere, checkedCylinder, checkedAddition } = this.state;
    let results = [...result.data];

    if (checkedSphere) {
      results = results.filter(
        el => inpSphere >= el.minSphere && inpSphere <= el.maxSphere
      );
    }
    if (checkedCylinder) {
      results = results.filter(
        el => inpCylinder >= el.minCylinder && inpCylinder <= el.maxCylinder
      );
    }
    if (checkedAddition) {
      results = results.filter(
        el => inpAddition >= el.minAddition && inpAddition <= el.maxAddition
      );
    }
    return results;
  };
  onSearch = () => {
    const { inputSphere, inputCylinder, inputAddition } = this.state;
    this.setState({
      results: this.findResults(inputSphere, inputCylinder, inputAddition)
    });
  };
  onChange = (key, value) => {
    this.setState({ [`input${key}`]: value });
  };
  toggledarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
  };
  onCheck = checked => {
    this.setState(checked);
  };

  render() {
    const {
      values,
      checkedSphere,
      checkedCylinder,
      checkedAddition,
      darkMode,
      results
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <div className={darkMode ? "AppDark" : "AppLight"}>
          <SearchMenu
            onCheck={this.onCheck}
            values={values}
            darkMode={darkMode}
            checkedSphere={checkedSphere}
            checkedCylinder={checkedCylinder}
            checkedAddition={checkedAddition}
          />
          <Grid className="searchField">
            {values.map((el, i) =>
              this.state[`checked${el}`] ? (
                <InputField
                  key={i}
                  inputField={this.state[`input${el}`]}
                  name={el}
                  label={el}
                  onChange={this.onChange}
                  darkMode={darkMode}
                />
              ) : null
            )}
            <SearchButton
              onSearch={this.onSearch}
              darkMode={darkMode}
              className="searchButton"
            />
          </Grid>
          <Grid className={darkMode ? "serchResult" : "serchResultLight"}>
            <ShowResults results={results} darkMode={darkMode} />
          </Grid>
          <SwitchStyle
            darkMode={darkMode}
            toggledarkMode={this.toggledarkMode}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
