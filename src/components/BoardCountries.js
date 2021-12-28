import React, { useState, useEffect } from "react";
import "./styles/BoardCountries.css";
import "./styles/CountryCard.css";

//Components
import CountryCard from "./CountryCard";
import Loader from "./Loader";
import PaginationData from "../utils/PaginationData";

const BoardCountries = ({ dataCountryCards }) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(0);
  const [group, setGroup] = useState([]);

  const settingData = () => {
    let arr = PaginationData(28, dataCountryCards);
    setData(arr);
    setGroup(data[page]);
    setTimeout(() => setLoad(true), 1500);
  };

  useEffect(() => {
    // console.log("Starting");

    return () => {
      setLoad(false);
      setData([]);
      setPage(0);
      setGroup([]);
      // console.log("closing");
    };
  }, []);

  useEffect(() => {
    // console.log("props");
    settingData();
  }, [dataCountryCards, load]);

  useEffect(() => {
    const adding = () => {
      if (page > 0 && page < data.length) {
        let newGroup = data[page];
        setGroup([...group, ...newGroup]);
      }
    };

    adding();
  }, [page]);

  const handleClick = () => {
    let max = data.length;
    if (page <= max) {
      setPage((prev) => prev + 1);
    }
  };

  const body = () => {
    if (!group) return;
    return (
      <div className="board-countries">
        {group.map((country, i) => (
          <CountryCard
            title={country[0]}
            flag={country[1]}
            key={i}
            link={country[2]}
          />
        ))}
        <div className="board-btn-container">
          <button onClick={() => handleClick()}>Show More</button>
        </div>
      </div>
    );
  };

  return <>{load ? body() : <Loader />}</>;
};

export default BoardCountries;
