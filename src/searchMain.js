import { TextField, Box,Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import WeatherDetails from "./weatherDetails";

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("mumbai");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=f840f08444c59ce09a2fbb87f9bff214`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <Box 
     className="app-container"
      display="flex"
      backgroundColor="skyblue"
      flexDirection={"column"}
      maxWidth={730}
      height={630}
      alignItems="center"
      justifyContent={"center"}
      margin="normal"
      marginTop={5}
      paddingTop={3}
      borderRadius={7}
      boxShadow={"5px 5px 10px #ccc"}
      sx={{
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
      >
      <Box
      >
        <Box>
          <TextField
          label="search"
            type="search"
            placeholder="Search city.."
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> <br />
          <Button variant="contained" onClick={getWeatherInfo}>
            Search
          </Button>
        </Box>
      </Box>
    
      <WeatherDetails {...tempInfo} />
    </Box>
  );
}

export default SearchMain;