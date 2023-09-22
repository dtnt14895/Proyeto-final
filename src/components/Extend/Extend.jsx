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
      <nav>
        <button>C</button>
        <button>F</button>
      </nav>
      <div className="card-contenedor">
        <div className="card">
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
      <h2></h2>
      <div>
        <div>6</div>
        <div>7</div>
      </div>
      <div>
        <div>8</div>
        <div>9</div>
      </div>
      <footer>10</footer>
    </div>
  );
}

export default Extend;
