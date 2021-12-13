import React, { useEffect, useState } from "react";
import "./styles/CountryPage.css";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
import GetData from "../utils/GetData";
import FormatCurrency from "../utils/FormatCurrency";
import formatingNumbers from "../utils/formatingNumbers";

function Country() {
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const [dataCountry] = await GetData(id);
      setData(dataCountry);
    };
    fetchData().then(() => setLoad(true));
  }, []);

  const content = () => {
    return (
      <ul>
        <li>
          Capital:<span>{data.capital}</span>
        </li>
        <li>
          Population:
          <span>
            {data.population ? formatingNumbers(data.population) : "...loading"}
          </span>
        </li>
        <li>
          Region:<span>{data.region}</span>
        </li>
        <li>
          Area:
          <span>
            {data.area ? formatingNumbers(data.area) : "...loading"} Km2
          </span>
        </li>
        <li>
          Currency:
          <span>
            {data.currencies
              ? FormatCurrency(data.currencies)[0]
              : "...loading"}
          </span>
          <span>
            {data.currencies
              ? FormatCurrency(data.currencies)[1]
              : "...loading"}
          </span>
        </li>
      </ul>
    );
  };

  return (
    <div className="countryPage-container">
      <h1>{id}</h1>
      {!load && <Loader />}
      <div className="dataCountry-container">
        <div className="flagContainer">
          <div className="flagHere">
            <img src={load ? data.flags.svg : "...Loading"} alt={id} />
          </div>
        </div>
        <div className="dataContainer">{load ? content() : null}</div>
      </div>
    </div>
  );
}

export default Country;
