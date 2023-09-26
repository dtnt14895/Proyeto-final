import { useEffect, useState } from "react";
import "./App.css";

import React from "react";
import Widget from "./components/widget/widget";
import Extend from "./components/Extend/Extend";
import { format } from "date-fns";
import datos5 from "./datos5";
import datos from "./datos";

function App() {
  const [city, setCity] = useState("london");
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
  const handleSearch = () => {
    setShowSearchMenu(false);
    setHide(false);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        );
        const datos = await res.json();
        setData(datos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getData();
  }, []);
  console.log(data);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
        );
        const datos = await res.json();
        setDataB(datos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getData();
  }, []);
  console.log(data);
  console.log(dataB);
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
  return (
    <div className="columnas">
      <Widget
        data={datos}
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
      />
      <Extend data={datos} datab={datos5} formatDate={formatDate} />
    </div>
  );
}

export default App;
