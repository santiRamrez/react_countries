import React from "react";
import "./styles/BoardCountries.css";

//Components
import CountryCard from "./CountryCard";
import Loader from "./Loader";

//API
import getData from "../utils/GetData";

class BoardCountries extends React.Component {
  state = {
    loading: true,
    data: [],
    error: null,
  };

  componentDidMount() {
    this.fetchCountryCards();
  }

  fetchCountryCards = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await getData();
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div className="board-countries">
        {this.state.data.map((country, i) => (
          <CountryCard
            title={country.name.common}
            flag={country.flags.svg}
            key={i}
            //xLink -> United States => united_states (with no spaces at the beggining and at the end)
            xLink={country.name.common.toLowerCase().replace(/\s/, "_").trim()}
          />
        ))}

        {this.state.loading && (
          <React.Fragment>
            <Loader />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default BoardCountries;
