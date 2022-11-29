// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//API_KEY :- 2cd188cf50ee75c19c083c92757ceef1

// const fetch = require("node-fetch");
import fetch from "node-fetch";

import getGeoCode from "./utils/geoCode.js";

import forecast from "./utils/forecast.js";

// const getGeoCode = require("./utils/geoCode.js"); // Getting error while fetching the data from other file so keeping here only
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=2cd188cf50ee75c19c083c92757ceef1`;

// // request({ url: url }, (error, response) => {
// //   console.log(response);
// // });

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=2cd188cf50ee75c19c083c92757ceef1"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//This code i'm keeping it in utils file because we are using it multiple times
//Getting error while getting this code here so keeping here only

// using new imprt methd to get the information
// const getGeoCode = (adress) => {
//   const getUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${adress}&appid=2cd188cf50ee75c19c083c92757ceef1`;

//   fetch(getUrl)
//     .then((res) => res.json())
//     .then((data) => console.log(data[0].lon))
//     .catch((e) => console.log(e));
// };

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

const adress = process.argv[2];
if (!adress) {
  console.log("please provide an address");
} else {
  getGeoCode(adress, (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
    forecast(data.lat, data.lon, (error, forcastData) => {
      console.log("Error", error);
      console.log("Data", forcastData);
    });
  });
}
