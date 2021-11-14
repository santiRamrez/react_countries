import React from "react";
//This allows me to use functions similar to innerHTML in plain JS
import ReactHtmlParser from "react-html-parser";

import DataAutocomplete from "../utils/DataAutocomplete";
import "./styles/Autocomplete.css";

const ResultsAutocomplete = ({ handleClick, text }) => {
  return (
    <li onClick={handleClick} className="result-autocomplete">
      {text}
    </li>
  );
};

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.items = [];
    this.colorResult = -1;
    this.state = {
      userInput: "",
      suggestions: [],
      formatedSuggestions: [],
    };
  }
  componentDidMount() {
    this.fill_Items();
  }
  fill_Items = async () => {
    let data = await DataAutocomplete();
    this.items = data;
  };
  onTextChanged = (e) => {
    const input = e.target.value;
    let suggestions = [];
    let formatedSuggestions = [];
    if (input.length > 0) {
      const regex = new RegExp(`^${input}`, "i");
      suggestions = this.items.sort().filter((val) => regex.test(val));
    }

    //Format text to make bold the letters that are being matched
    suggestions.forEach((val, i) => {
      if (input.toLowerCase() === val.toLowerCase().substr(0, input.length)) {
        let bold = `<b>${val[0] + input.substr(1).toLowerCase()}</b>`;
        let rest = `${val.substr(input.length)}`;
        let output = bold + rest;
        formatedSuggestions.push(ReactHtmlParser(output));
      }
    });

    this.setState({
      userInput: e.target.value,
      suggestions,
      formatedSuggestions,
    });
  };
  onClickResults = (e) => {
    const $input = document.querySelector("#userInput");
    let val = e.target.textContent;
    $input.value = val;
    this.setState({
      formatedSuggestions: [],
    });
  };

  renderSuggestions = () => {
    const { formatedSuggestions } = this.state;
    if (formatedSuggestions.length === 0) return null;

    return (
      <ul className="cont-results-autocomplete">
        {this.state.formatedSuggestions.map((item, i) => (
          <ResultsAutocomplete
            handleClick={this.onClickResults}
            key={i}
            text={item}
          />
        ))}
      </ul>
    );
  };

  handleUpDownArrowKeys = (e) => {
    // let trackColor = this.colorResult;
    // //On arrow key down
    // if (e.which === 40) {
    //   this.colorResult++;
    // }
  };

  cleanSuggestions = () => {
    setTimeout(() => {
      this.setState({
        formatedSuggestions: [],
        suggestions: [],
      });
    }, 80);
  };

  render() {
    return (
      <form className="auto-form">
        <div className="autocomplete">
          <input
            onBlur={this.cleanSuggestions}
            autoComplete="off"
            onKeyDown={(e) => this.handleUpDownArrowKeys(e)}
            id="userInput"
            type="text"
            onChange={this.onTextChanged}
            placeholder="Country"
          />
          {this.renderSuggestions()}
        </div>
        <div className="cont-btn">
          <button type="submit">Search</button>
        </div>
      </form>
    );
  }
}

export default Autocomplete;
