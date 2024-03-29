import React, { useEffect, useState } from "react";
import "./styles/CountryPage.css";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
import Maps from "../components/Maps";
import GetData from "../utils/GetData";
import FormatCurrency from "../utils/FormatCurrency";
import formatingNumbers from "../utils/formatingNumbers";

//Page
import Error404 from "./404";

function Country({ list }) {
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  const [coords, setCoords] = useState("");

  let { id } = useParams();
  const country = list.includes(id) ? id : "There is not such a country";

  useEffect(() => {
    const fetchData = async () => {
      const [dataCountry] = await GetData(id);
      setData(dataCountry);
      setCoords([...dataCountry.latlng]);
    };
    fetchData();
    fetchData().then(() => {
      setLoad(true);
    });

    return () => {
      setLoad(false);
      setData([]);
      setCoords([]);
    };
  }, [id]);

  const content = () => {
    console.log(coords);
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

  const loadPage = () => {
    return (
      <div className="countryPage-container">
        <h1>{country[0].toUpperCase() + country.slice(1)}</h1>
        {!load && <Loader />}
        <div className="dataCountry-container">
          <div className="flagContainer">
            <div className="flagHere">
              <img src={load ? data.flags.svg : "...Loading"} alt={country} />
            </div>
          </div>
          <div className="dataContainer">{load ? content() : null}</div>
        </div>
        <div className="mapContainer">
          {load ? <Maps latLong={coords} /> : null}
        </div>
      </div>
    );
  };

  return <>{list.includes(id) ? loadPage() : <Error404 />}</>;
}

export default Country;
