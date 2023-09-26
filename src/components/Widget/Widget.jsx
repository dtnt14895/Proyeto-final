import React, { useState } from "react";
import "./Widget.css";
import Clear from "../../assets/Clear.png";
import Clouds from "../../assets/Clouds.png";
import Hail from "../../assets/Hail.png";
import LightCloud from "../../assets/LightCloud.png";
import LigthRain from "../../assets/LightRain.png";
import Rain from "../../assets/Rain.png";
import Shower from "../../assets/Shower.png";
import Sleet from "../../assets/Sleet.png";
import Snow from "../../assets/Snow.png";
import ThunderStorm from "../../assets/Thunderstorm.png";
import CloudsBack from "../../assets/Cloud-background.png";

function Widget({
  data,
  currentDate,
  handleSearchClick,
  setSearchInput,
  showSearchMenu,
  handleSearch,
  searchResults,
  searchInput,
  hide,
  handleGetLocation
}) {
  const weatherImageMap = {
    Clear: Clear,
    Rain: Rain,
    Clouds: Clouds,
    Hail: Hail,
    LightCloud: LightCloud,
    LigthRain: LigthRain,
    Shower: Shower,
    Sleet: Sleet,
    Snow: Snow,
    ThunderStorm: ThunderStorm,
  };
  const [search,setSearch]=useState("search location");
  return (
    <div className={`izquierda`}>
      <div>
        <button
          className={`btn-search ${hide == true ? "hide" : ""}`}
          onClick={() => {
            handleSearchClick();
          }}
        >
          Search for places
        </button>
        <button className={`btn-location ${hide == true ? "hide" : ""}`} onClick={handleGetLocation}>
          <span className="material-symbols-outlined">my_location</span>
        </button>
        {showSearchMenu && (
          <div className="search-menu">
            <input
              className="input"
              type="text"
              placeholder={search}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              className="btn-se"
              onClick={() => {
                handleSearch(search);
                console.log(search);
              }}
            >
              Search
            </button>
            <ul className="ul-city">
              {searchResults.map((result, index) => (
                <div className="div-click" onClick={()=>{
                  setSearch(result)
                }}>
                  <li className="li-city" key={index}>
                    <p className="p-city">{result}</p>
                    <p className="p-">&gt;</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={`${hide == true ? "hide" : ""}`}>
        <div>
          <img
            className="img-main"
            src={weatherImageMap[data && data.weather[0].main]}
            alt="Estado del clima"
          />
          <img className="clouds" src={CloudsBack} alt="back" />
        </div>
        <div className="temperatura-main">
          <h1>{Math.round(data && data.main.temp)}</h1>
          <h4 className="unidad">°C</h4>
        </div>
        <h3 className="clima">{data && data.weather[0].main}</h3>
        <div className="actual">
          <p className="today">Today</p>
          <p className="point">.</p>
          <p>{currentDate}</p>
        </div>
        <h2>
          <span className="material-symbols-outlined">location_on</span>{" "}
          {data && data.name}
        </h2>
      </div>
    </div>
  );
}

export default Widget;
