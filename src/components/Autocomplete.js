import React from "react";
import "./styles/Autocomplete.css";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
    this.userInputHandler = this.userInputHandler.bind(this);
  }
  userInputHandler(e) {
    this.setState({
      userInput: e.target.value.toLowerCase(),
    });
  }
  render() {
    return (
      <form className="auto-form">
        <div className="autocomplete">
          <input
            id="userInput"
            type="text"
            onChange={this.userInputHandler}
            placeholder="Country"
          />
        </div>
        <div className="cont-btn">
          <button type="submit">Search</button>
        </div>
      </form>
    );
  }
}

export default Autocomplete;
