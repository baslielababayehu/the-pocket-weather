//init weather object

const weather = new Weather("wooster");
const display = new Display();

window.addEventListener("load", (event) => {
  loadWeather();
  loadForecast();
  loadDailyWeather();
});

let findCity = (e) => {
  console.log("gets to here");
  display.clearweather();
  console.log(e.target.value);
  let city = e.target.value + " ";

  weather.city = city;
  loadWeather();
  loadForecast();
  display.cityFound();
};
document.getElementById("input-city").addEventListener("keydown", findCity);
document
  .getElementById("input-city")
  .addEventListener("click", (e) => console.log(e.target));

//change to celsius
document.querySelector(".change-celsius").addEventListener("click", (e) => {
  console.log(e.target);
  weather
    .getWeather()
    .then((results) => {
      //change to celsius
      display.setCelsiusMain(results);
    })
    .catch((err) => console.log(err));

  weather
    .getForecast()
    .then((results) => {
      //change to celsius
      display.setCelsiusForecast(results);
    })
    .catch((err) => console.log(err));
});

//change to f
document.querySelector(".change-fahrenheit").addEventListener("click", (e) => {
  console.log(e.target);
  weather
    .getWeather()
    .then((results) => {
      //change to celsius
      display.setFahrenheitMain(results);
    })
    .catch((err) => console.log(err));

  weather
    .getForecast()
    .then((results) => {
      //change to celsius
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
      // display.displayCurrentWeatherDetails(results);
      // display.displayDetails(results);
    })
    .catch((err) => {
      console.log(err);
      display.cityNotFound();
    });
}
function loadForecast() {
  weather
    .getForecast()
    .then((results) => {
      display.cityFound();
      display.displayDailyForecast(results);
    })
    .catch((err) => {
      console.log(err);
      display.cityNotFound();
    });
}
function loadDailyWeather() {
  weather
    .oneCallWeather()
    .then((dailyInfo) => {
      //load UI items
      display.cityFound();
      display.displayCurrentWeatherDetails(dailyInfo);

      // display.displayCity(dailyInfo);
      // display.displayDetails(dailyInfo);
    })
    .catch((err) => {
      console.log(err);
      display.cityNotFound();
    });
}
