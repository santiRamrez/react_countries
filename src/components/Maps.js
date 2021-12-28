import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./styles/Maps.css";

const Maps = ({ latLong }) => {
  // create map
  useEffect(() => {
    var map = L.map("map").setView(latLong, 5);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FudGlyYW1yZXoiLCJhIjoiY2t4cGN1cjllNDBoNjJvb2tqZG1nODMxNyJ9.cCHRaYiyJIQG58B9-ekQ-g",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1Ijoic2FudGlyYW1yZXoiLCJhIjoiY2t4cGN1cjllNDBoNjJvb2tqZG1nODMxNyJ9.cCHRaYiyJIQG58B9-ekQ-g",
      }
    ).addTo(map);

    return () => {
      map.remove();
    };
  }, [latLong]);

  return <div id="map"></div>;
};

export default Maps;
