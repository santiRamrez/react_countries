import React, { useState, useRef } from "react";
//This allows me to use functions similar to innerHTML in plain JS
import ReactHtmlParser from "react-html-parser";

import "./styles/Autocomplete.css";

import { useLocation, Link } from "react-router-dom";

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

  let location = useLocation();

  let inputEl = useRef(null);

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
    let val = e.target.textContent;
    inputEl.current.value = "";
    inputEl.current.value = val;
    setUserInput(val);
    setFormatedSuggestions([]);
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
    }, 2500);
  };

  const btnLink = () => {
    return (
      <Link className="auto-btn" to={userInput.toLowerCase()}>
        Search
      </Link>
    );
  };

  const btnChart = () => {
    return (
      <button
        className="auto-btn"
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
    );
  };

  return (
    <div className="auto-form" style={{ fontSize: size }}>
      <div className="autocomplete">
        <input
          onBlur={cleanSuggestions}
          autoComplete="off"
          id="userInput"
          ref={inputEl}
          type="text"
          onChange={onTextChanged}
          placeholder="Country"
        />
        {renderSuggestions()}
      </div>
      <div className="cont-btn">
        {location.pathname === "/" ? btnLink() : btnChart()}
      </div>
    </div>
  );
};

export default Autocomplete;
