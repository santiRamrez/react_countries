import React from "react";
import "./styles/Autocomplete.css";

class Autocomplete extends React.Component {
  render() {
    return (
      <form className="auto-form">
        <div className="autocomplete">
          <input
            id="userInput"
            type="text"
            name="toServer"
            placeholder="Country"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Autocomplete;
