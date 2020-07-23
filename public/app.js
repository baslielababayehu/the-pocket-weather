//init weather object
// const city = document.getElementById("input-city").value;
console.log(
  document.getElementById("input-city").parentElement.childNodes[1].value === ""
);
let weather = new Weather("wooster");
const display = new Display();

let findCity = (e) => {
  console.log("gets to here");
  display.clearweather();
  console.log(e.target.value);
  let city = e.target.value + " ";
  // let city = "london";

  weather.city = city;
  //if (weather.getWeather.getWeather.r === 200) {
  loadWeather();
  loadForecast();
  display.cityFound();
  //}

  // let city = e.target.value;
  // if (
  //   document.getElementById("input-city").parentElement.childNodes[1].value ===
  //   ""
  // ) {
  //   city = "London";
  //   document.getElementById("input-city").addEventListener("keyup", (e) => {
  //     let city = document.getElementById("input-city").parentElement
  //       .childNodes[1].value;
  //     console.log(city);
  //   });
  // } else {
  //   city = document.getElementById("input-city").parentElement.childNodes[1]
  //     .value;
  //   // console.log(`the city is ${city}`);
  // }
};
window.addEventListener("load", (event) => {
  loadWeather();
  loadForecast();
});
document.getElementById("input-city").addEventListener("keydown", findCity);
document
  .getElementById("input-city")
  .addEventListener("click", (e) => console.log(e.target));

// city = document
//   .getElementById("input-city")
//   .addEventListener("keyup", findCity);

// findCity();
// console.log(findCity());
// // let weather = new Weather("wooster");

// window.addEventListener("load", (event) => {
//   loadWeather();
//   loadForecast();
// });

// //change to celsius
// document.querySelector(".change-celsius").addEventListener("click", (e) => {
//   console.log(e.target);
//   weather
//     .getWeather()
//     .then((results) => {
//       //change to celsius
//       display.setCelsiusMain(results);
//     })
//     .catch((err) => console.log(err));

//   weather
//     .getForecast()
//     .then((results) => {
//       //change to celsius
//       display.setCelsiusForecast(results);
//     })
//     .catch((err) => console.log(err));
// });

// //change to f
// document.querySelector(".change-fahrenheit").addEventListener("click", (e) => {
//   console.log(e.target);
//   weather
//     .getWeather()
//     .then((results) => {
//       //change to celsius
//       display.setFahrenheitMain(results);
//     })
//     .catch((err) => console.log(err));

//   weather
//     .getForecast()
//     .then((results) => {
//       //change to celsius
//       display.setFahrenheitForecast(results);
//     })
//     .catch((err) => console.log(err));
// });

function loadWeather() {
  weather
    .getWeather()
    .then((results) => {
      //load UI items
      display.cityFound();
      display.displayFirst(results);
      display.displayDetails(results);
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

/* //init weather object
// const city = "london";
const weather = new Weather();
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
 */
