const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const API_KEY_GOOGLE_MAPS = process.env.API_KEY_GOOGLE_MAPS;
console.log("The API Key is: " + API_KEY);

const app = express();
app.listen(process.env.PORT || 2999, () => console.log("listening at 2999"));
app.use(express.static("public"));

app.get("/weather/:city", async (request, response) => {
  const city = request.params.city;

  const fetch_response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );

  const responseData = await fetch_response.json();
  return response.json(responseData);
});

// app.get("/forecast/:city", async (request, response) => {
//   const city = request.params.city;

//   const fetch_response = await fetch(
//     `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
//   );

//   const responseData = await fetch_response.json();
//   return response.json(responseData);
// });

app.get("/oneCallWeather/", async (request, response) => {
  // const city = request.params.city;

  const fetch_response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
    exclude=hourly,daily&appid=${API_KEY}`
  );

  const responseData = await fetch_response.json();
  return response.json(responseData);
});

app.get("/latlon/", async (request, response) => {
  // const location = request.params.city;

  const fetch_response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=addis+ababa&key=${API_KEY_GOOGLE_MAPS}`
  );

  const responseData = await fetch_response.json();
  return response.json(responseData);
});
