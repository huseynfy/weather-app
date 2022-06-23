import React, { useState, useEffect } from "react";
import { API_KEY, API_ADDRESS } from "../Data/data";
import Card from "./card";

export default function Weather() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [weatherData,setWeatherData] = useState([])
  useEffect(()=>{
    const fetching = async ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)
        })
        const resp = await fetch(`${API_ADDRESS}/weather/?lat=${lat}&lon=${lon}&units=imperial&APPID=${API_KEY}`);
        const data = await resp.json();
        setWeatherData(data)
        console.log(data)
    }
    fetching();
  },[lat,lon])

  return<>
   {(typeof weatherData.main) != 'undefined' ?
  <Card weatherData={weatherData}/> : <p>No Data</p>}
  </>
}
