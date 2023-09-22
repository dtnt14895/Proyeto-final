import { useEffect, useState } from "react";
import "./App.css";

import React from "react";
import Widget from "./components/widget/widget";
import Extend from "./components/Extend/Extend";
import { format } from 'date-fns';

function App() {
  const [data, setData] = useState(0);
  const [dataB, setDataB] = useState(0);
useEffect(() => {
  const getData = async () => {
    try {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=oruro&appid=e90583c0b83a9440a70d6be37974291e&units=metric"
      );
      const datos = await res.json();
      setData(datos);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  getData();
}, []);
useEffect(() => {
  const getData = async () => {
    try {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=oruro&appid=e90583c0b83a9440a70d6be37974291e&units=metric"
      );
      const datos = await res.json();
      setDataB(datos);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  getData();
}, []);
const currentDate = format(new Date(),'EEE, d MMM');
const formatDate = (inputDate)=>{
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date(inputDate);
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const month = months[date.getUTCMonth()];

  return `${dayOfWeek}, ${dayOfMonth} ${month}`;
}
  return (
    <div className="columnas">
      <Widget data={data} currentDate={currentDate}/>
      <Extend datab={dataB} formatDate={formatDate}/>
    </div>
  );
}

export default App;
