import React from "react";
import "./styles/ResultsAutocomplete.css";

//Fetch data
import DataAutocomplete from "../utils/DataAutocomplete";

class ResultsAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    this.getArr();
  }

  getArr = async () => {
    try {
      const arr = await DataAutocomplete();
      return this.setState({ data: arr });
    } catch (error) {
      return this.setState({ data: error });
    }
  };
  render() {
    return (
      <div className="cont-results-autocomplete">
        <h3>{this.props.input}</h3>
      </div>
    );
  }
}

export default ResultsAutocomplete;
