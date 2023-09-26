import React from "react";
import "./Extend.css";
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
function Extend({ datab, formatDate }) {
  console.log(datab);
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
  return (
    <div className="derecha">
      <nav className="nav">
        <button className="conversor">C</button>
        <button className="conversor">F</button>
      </nav>
      <div className="card-contenedor">
        <div className="card tomorrow">
          <p>Tomorrow</p>
          <img
            className="card-imagen"
            src={weatherImageMap[datab && datab.list[0].weather[0].main]}
            alt=""
          />
          <div className="min-max">
            <p>{`${datab && Math.round(datab.list[0].main.temp_min)}°C`}</p>
            <p className="der">{`${
              datab && Math.round(datab.list[0].main.temp_max)
            }°C`}</p>
          </div>
        </div>
        <div className="card">
          <p>{formatDate(datab.list[8].dt_txt)}</p>
          <img
            className="card-imagen"
            src={weatherImageMap[datab && datab.list[8].weather[0].main]}
            alt=""
          />
          <div className="min-max">
            <p>{`${datab && Math.round(datab.list[8].main.temp_min)}°C`}</p>
            <p className="der">{`${
              datab && Math.round(datab.list[8].main.temp_max)
            }°C`}</p>
          </div>
        </div>
        <div className="card">
          <p>{formatDate(datab.list[16].dt_txt)}</p>
          <img
            className="card-imagen"
            src={weatherImageMap[datab && datab.list[16].weather[0].main]}
            alt=""
          />
          <div className="min-max">
            <p>{`${datab && Math.round(datab.list[16].main.temp_min)}°C`}</p>
            <p className="der">{`${
              datab && Math.round(datab.list[16].main.temp_max)
            }°C`}</p>
          </div>
        </div>
        <div className="card">
          <p>{formatDate(datab.list[24].dt_txt)}</p>
          <img
            className="card-imagen"
            src={weatherImageMap[datab && datab.list[24].weather[0].main]}
            alt=""
          />
          <div className="min-max">
            <p>{`${datab && Math.round(datab.list[24].main.temp_min)}°C`}</p>
            <p className="der">{`${
              datab && Math.round(datab.list[24].main.temp_max)
            }°C`}</p>
          </div>
        </div>
        <div className="card">
          <p>{formatDate(datab.list[32].dt_txt)}</p>
          <img
            className="card-imagen"
            src={weatherImageMap[datab && datab.list[32].weather[0].main]}
            alt=""
          />
          <div className="min-max">
            <p>{`${datab && Math.round(datab.list[32].main.temp_min)}°C`}</p>
            <p className="der">{`${
              datab && Math.round(datab.list[32].main.temp_max)
            }°C`}</p>
          </div>
        </div>
      </div>
      <div className="card-2">
        <div className="title-h2">
          <h2 className="h2-title">Today’s Hightlights</h2>
        </div>
        <div className="extend-card-1">
          <div className="card-extend">
            <p className="card-extend-title">Wind status</p>
            <h1 className="wind">7mph</h1>
            <div className="card-footer">
              <div className="icon">
                <span class="material-symbols-outlined">near_me</span>
              </div>
              <p className="wsw">WSW</p>
            </div>
          </div>
          <div className="card-extend">
            <p className="card-extend-title">Humidity</p>
            <h1 className="humidity">84%</h1>
            <div className="numbers">
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </div>
            <div className="contenedor-medidor">
              <div className="barra" style={{ width: `84%` }}></div>
            </div>
            <p className="porcentage">%</p>
          </div>
        </div>
        <div className="extend-card-2">
          <div className="card-extend-2">
            <p className="card-extend-title">Visibility</p>
            <h1>6.4 miles</h1>
          </div>
          <div className="card-extend-2">
            <p className="card-extend-title">Air Pressure</p>
            <h1>998 mb</h1>
          </div>
        </div>
      </div>
      <footer className="footer">created by AbnerCopa - devChallenges.io</footer>
    </div>
  );
}

export default Extend;
