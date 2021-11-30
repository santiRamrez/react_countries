import React, { useState } from "react";
//This allows me to use functions similar to innerHTML in plain JS
import ReactHtmlParser from "react-html-parser";

import "./styles/Autocomplete.css";

const ResultsAutocomplete = ({ handleClick, text }) => {
  return (
    <li onClick={handleClick} className="result-autocomplete">
      {text}
    </li>
  );
};

const Autocomplete = ({ countryList, size, hasSelected = (f) => f }) => {
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [formatedSuggestions, setFormatedSuggestions] = useState([]);

  const onTextChanged = (e) => {
    const input = e.target.value;
    let subSuggestions = [];
    let subFormatedSuggestions = [];
    if (input.length > 0) {
      const regex = new RegExp(`^${input}`, "i");
      subSuggestions = countryList.sort().filter((val) => regex.test(val));
    }

    //Format text to make bold the letters that are being matched
    subSuggestions.forEach((val, i) => {
      if (input.toLowerCase() === val.toLowerCase().substr(0, input.length)) {
        let bold = `<b>${val[0] + input.substr(1).toLowerCase()}</b>`;
        let rest = `${val.substr(input.length)}`;
        let output = bold + rest;
        subFormatedSuggestions.push(ReactHtmlParser(output));
      }
    });

    setUserInput(e.target.value);
    setSuggestions(subSuggestions);
    setFormatedSuggestions(subFormatedSuggestions);
  };

  const onClickResults = (e) => {
    const $input = document.querySelector("#userInput");
    let val = e.target.textContent;
    $input.value = "";
    $input.value = val;
    setUserInput(val);
    setTimeout(() => {
      setFormatedSuggestions([]);
    }, 500);
  };

  const renderSuggestions = () => {
    if (formatedSuggestions.length === 0) return null;

    return (
      <ul className="cont-results-autocomplete">
        {formatedSuggestions.map((item, i) => (
          <ResultsAutocomplete
            handleClick={onClickResults}
            key={i}
            text={item}
          />
        ))}
      </ul>
    );
  };

  const cleanSuggestions = () => {
    setTimeout(() => {
      setSuggestions([]);
      setFormatedSuggestions([]);
    }, 100);
  };

  return (
    <div className="auto-form" style={{ fontSize: size }}>
      <div className="autocomplete">
        <input
          onBlur={cleanSuggestions}
          autoComplete="off"
          id="userInput"
          type="text"
          onChange={onTextChanged}
          placeholder="Country"
        />
        {renderSuggestions()}
      </div>
      <div className="cont-btn">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (countryList.includes(userInput)) {
              hasSelected(userInput);
            } else {
              hasSelected("");
            }
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Autocomplete;
