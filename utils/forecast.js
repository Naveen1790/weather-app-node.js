import fetch from "node-fetch";

const forecast = (lat, lon, callback) => {
  const forecastURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2cd188cf50ee75c19c083c92757ceef1`;
  fetch(forecastURL)
    .then((res) => res.json())
    .then((data) => {
      const forecastData = {
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        pressure: data.main.pressure,
        temperature: data.main.temp,
      };
      callback(undefined, forecastData);
    })
    .catch((e) => callback(e, undefined));
};

export default forecast;
