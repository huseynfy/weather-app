import React, { useState, useEffect } from "react";
import { API_KEY, API_ADDRESS } from "../Data/data";
import Card from "./card";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Weather() {
  const [weatherData,setWeatherData] = useState([])
  const [currentCity,setCurrentCity] = useState('sacramento');

  useEffect(()=>{
    const fetching = async ()=>{
        const resp = await fetch(`${API_ADDRESS}/weather?q=${currentCity.replace(' ','+')}&units=imperial&APPID=${API_KEY}`);
        const data = await resp.json();
        setWeatherData(data)
        console.log(data)
    }
    fetching();
  },[currentCity])

  const handleChange = (e) =>{
    setCurrentCity(e.target.value);
  }

  return<>
   {(typeof weatherData.main) != 'undefined' ?
  <Card weatherData={weatherData}/> : (
    <Box sx={{ width: '100%', marginBottom:'32px' }}>
  <LinearProgress />
</Box>)}
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
        marginTop:'32px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search for a city" variant="outlined" onChange={handleChange} />
    </Box>
  </>
}
