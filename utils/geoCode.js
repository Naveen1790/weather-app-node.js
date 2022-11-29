import fetch from "node-fetch";

const getGeoCode = (adress, callback) => {
  const getUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${adress}&appid={enterurkey}`;

  fetch(getUrl)
    .then((res) => res.json())
    .then((data) => {
      const cordData = {
        lat: data[0].lat,
        lon: data[0].lon,
        state: data[0].state,
      };
      callback(undefined, cordData);
    })
    .catch((e) => callback(e, undefined));
};

// module.exports = { getGeoCode };

export default getGeoCode;
