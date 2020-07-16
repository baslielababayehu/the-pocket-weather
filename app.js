//init weather object
const weather = new Weather("wooster");
console.log(weather);
const display = new Display();

window.addEventListener("load", (event) => {
  loadWeather();
});

function loadWeather() {
  weather
    .getWeather()
    .then((results) => {
      //load UI items
      console.log(results);
      display.displayFirst(results);
      display.displayDetails(results);
    })
    .catch((err) => console.log(err));
}
