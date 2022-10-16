import { Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";

function WeatherDetails({
  temp,
  humidity,
  pressure,
  weatherType,
  name,
  speed,
  country,
  sunset,
}) {
  const [weatherState, setWeatherState] = useState("");
  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWeatherState("everydayCloud");
          break;
        case "Haze":
          setWeatherState("everyDayfog");
          break;
        case "Clear":
          setWeatherState("everydaySunny");
          break;
        case "Mist":
          setWeatherState("everydaDusty");
          break;
        case "Rain":
          setWeatherState("weekDayRain");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherType]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <Box>
          <i className={`wi ${weatherState}`}></i>
        </Box>
        <Box className="temp" fontSize={30} fontWeight='bold'>
          <Box>
            <span>{temp}&deg;</span>
          </Box>
          <Box>
            <Box>{weatherType}</Box>
            <Box fontWeight='bold'>
              {name}, {country}
            </Box>
          </Box>
        </Box>
        <Box className="date" fontSize={40}>{new Date().toLocaleString()}</Box>
        <Box>
          <Box>
            <Box>
              <Typography variant="body" fontWeight='bold'>
                <i className={"weekDaySunset"}></i>
              </Typography>
              <Typography  className="time" fontWeight='bold' variant="body2" fontSize={29}>
                {timeStr} PM <br />
                Sunset
              </Typography>
            </Box>

            <Box className="humidity" backgroungcolor='blue'  fontWeight='bold'>
              <Typography variant="body2" >
                <i className={"weekDayhumidity"}></i>
              </Typography>
              <Typography variant="body2" fontWeight='bold' fontSize={30}>
                {humidity} <br />
                Humidity
              </Typography>
            </Box>
          </Box>

          <Box>
            <Box>
              <Typography variant="body2">
                <i className={"wi wi-rain"}></i>
              </Typography>
              <Typography className="Pressure" variant="body2" fontWeight='bold' fontSize={30}>
                {pressure} <br />
                Pressure
              </Typography>
            </Box>

            <Box fontWeight='bold'>
              <Typography variant="body2">
                <i className={"everyDaystrong-wind"}></i>
              </Typography>
              <Typography className="speed" variant="body2" fontWeight='bold' fontSize={30}>
                {speed} <br />
                Speed
              </Typography>
            </Box>
          </Box>
        </Box>
      </article>
    </>
  );
}

export default WeatherDetails;