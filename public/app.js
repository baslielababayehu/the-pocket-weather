//init weather object

// const { response } = require("express");

const weather = new Weather("Mountain View", 37.4220578, -122.0840897);
const display = new Display();

window.addEventListener("load", (event) => {
  loadWeather();
  loadDailyWeather();
});

let findCity = async (e) => {
  display.clearweather();
  let city = document.getElementById("input-city").value;
  weather.city = city;
  loadWeather();
  loadDailyWeather();
  loadLatLon();
  display.cityFound();
};

document.getElementById("search-button").addEventListener("click", findCity);

//change to celsius
document.querySelector(".change-celsius").addEventListener("click", (e) => {
  weather
    .getReturnWeather()
    .then((results) => {
      //change to celsius
      console.log(results);
      display.setCelsiusMain(results);
      display.setCelsiusForecast(results);
    })
    .catch((err) => console.log(err));
});

//change to f
document.querySelector(".change-fahrenheit").addEventListener("click", (e) => {
  weather
    .getReturnWeather()
    .then((results) => {
      //change to celsius
      display.setFahrenheitMain(results);
      display.setFahrenheitForecast(results);
    })
    .catch((err) => console.log(err));
});

function loadWeather() {
  weather
    .getWeather()
    .then((results) => {
      //load UI items
      display.cityFound();
      display.displayCity(results);
    })
    .catch((err) => {
      console.log(err);
      display.cityNotFound();
    });
}

function loadDailyWeather() {
  weather
    .getReturnWeather()
    .then((dailyInfo) => {
      //load UI items
      display.cityFound();
      display.displayCurrentWeatherDetails(dailyInfo);
      display.displayCurrentWeatherInfo(dailyInfo);
      display.displayForecastSection(dailyInfo);
    })
    .catch((err) => {
      console.log(err);
      display.cityNotFound();
    });
}
