//init weather object
const city = "wooster";
const weather = new Weather(city);
const display = new Display();

window.addEventListener("load", (event) => {
  loadWeather();
  loadForecast();
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
