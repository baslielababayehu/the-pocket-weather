//init weather object
const city = "wooster";
const weather = new Weather(city);
const display = new Display();

window.addEventListener("load", (event) => {
  loadWeather();
  loadForecast();
});

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
      display.displayFirst(results);
      display.displayDetails(results);
    })
    .catch((err) => console.log(err));
}
function loadForecast() {
  weather
    .getForecast()
    .then((results) => {
      display.displayDailyForecast(results);
    })
    .catch((err) => console.log(err));
}

console.log(Math.round(227.9887));
