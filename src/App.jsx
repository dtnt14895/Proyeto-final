import { useEffect, useState } from "react";
import "./App.css";

import React from "react";
import Widget from "./components/widget/widget";
import Extend from "./components/Extend/Extend";
import { format } from "date-fns";
import datos5 from "./datos5";
import datos from "./datos";

function App() {
  const [city, setCity] = useState("lapaz");
  const [data, setData] = useState();
  const [dataB, setDataB] = useState();
  const key = "b6fa2e1bfe6cb687ff3a8c6469391ef6";
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([
    "london",
    "barcelona",
    "long beach",
  ]);
  const [hide, setHide] = useState(false);
  const handleSearchClick = () => {
    setShowSearchMenu(true);
    setHide(true);
  };
  const handleSearch = (e) => {
    setShowSearchMenu(false);
    setHide(false);
    console.log(e);
    setCity(e);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        );
        const datos = await res.json();
        setData(datos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getData();
  }, [city]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
        );
        const datos = await res.json();
        setDataB(datos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getData();
  }, [city]);
  console.log(data,dataB);
  const currentDate = format(new Date(), "EEE, d MMM");
  const formatDate = (inputDate) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date(inputDate);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const dayOfMonth = date.getUTCDate();
    const month = months[date.getUTCMonth()];

    return `${dayOfWeek}, ${dayOfMonth} ${month}`;
  };
  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const apiKey = "e4de81ef4e2d47bf9315c420056a12a1";
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            if (data.results.length > 0) {
              const ciudad = data.results[0].components.city;
              console.log("Ciudad: " + ciudad);
              setCity(ciudad.toLowerCase());
            } else {
              console.log("No se encontraron resultados de geocodificación.");
            }
          })
          .catch((error) => {
            console.error("Error al obtener la ubicación: " + error);
          });
      });
    } else {
      console.log("La geolocalización no está disponible en este navegador.");
    }
  };
  return (
    <div className="columnas">
      <Widget
        data={data}
        currentDate={currentDate}
        handleSearchClick={handleSearchClick}
        setSearchInput={setSearchInput}
        showSearchMenu={showSearchMenu}
        handleSearch={handleSearch}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
        searchInput={searchInput}
        hide={hide}
        setHide={setHide}
        handleGetLocation={handleGetLocation}
      />
      <Extend data={data} datab={dataB} formatDate={formatDate} />
    </div>
  );
}

export default App;
