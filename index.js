const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const API_KEY_GOOGLE_MAPS = process.env.API_KEY_GOOGLE_MAPS;

const app = express();
app.listen(process.env.PORT || 2999, () => console.log("listening at 2999"));
app.use(express.static("public"));

app.get("/oneCallWeather/:lat/:lon", async (request, response) => {
  const lat = request.params.lat;
  const lon = request.params.lon;

  const fetch_response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=hourly,daily&appid=${API_KEY}`
  );

  const responseData = await fetch_response.json();
  return response.json(responseData);
});

app.get("/latlon/:city", async (request, response) => {
  const city = request.params.city;
  const fetch_response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY_GOOGLE_MAPS}`
  );

  const responseData = await fetch_response.json();
  return response.json(responseData);
});
