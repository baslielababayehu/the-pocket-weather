class Display {
  constructor() {
    this.location = document.getElementById("d-location");
    this.degreesNumber = document.getElementById("d-degrees-number");
    this.description = document.getElementById("d-description");
    this.lastUpdated = document.getElementById("d-last-updated");
    this.changeUnits = document.getElementById("change-units");
    this.icon = document.getElementById("d-icon");
  }

  convertToHumanDate(timestamp) {
    const milliseconds = timestamp * 1000;
    let options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };

    const dateObject = new Date(milliseconds);

    const humanDateFormat = dateObject.toLocaleString("en-US", options);
    return humanDateFormat;
  }

  displayCity(results) {
    this.location.innerHTML = `<h4>${results.results[0].formatted_address}</h4>`;
  }

  displayCurrentWeatherInfo(dailyInfo) {
    this.degreesNumber.innerHTML = `${Math.round(
      (dailyInfo.current.temp - 273.15) * (9 / 5) + 32
    )} <span>&#176;</span> F`;
    this.description.textContent = dailyInfo.current.weather[0].description;

    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${dailyInfo.current.weather[0].icon}@2x.png`
    );
  }

  displayCurrentWeatherDetails(dailyInfo) {
    let i = 0;
    while (i < 3) {
      let details = document.createElement("div");
      details.className = `col-4  item${i}`;
      i++;
      const detailArea = document.querySelector(".details");
      detailArea.appendChild(details);
    }
    document.querySelector(".item0").innerHTML = `Feels like ${Math.round(
      (dailyInfo.current.feels_like - 273.15) * (9 / 5) + 32
    )}<span style="font-size: 1rem;">&#176;</span>`;
    document.querySelector(".item1").textContent = `Humidity: ${Math.round(
      dailyInfo.current.humidity
    )}%`;
    document.querySelector(".item2").textContent = `wind speed: ${Math.round(
      dailyInfo.current.wind_speed
    )} mph`;
  }

  displayForecastSection(dailyInfo) {
    let i = 1;

    while (i < 8) {
      let details = document.createElement("div");
      details.className = `ml-3 mb-3 col-xl-2 col-lg-2 col-md-3 col-sm-4 forecast${
        i + 1
      }`;
      details.setAttribute(
        "style",
        "background-color: #1b7ca4; border-radius: 3px"
      );
      details.innerHTML = `              <div class="row">
      <div class="col-12 text-center mt-2">${this.convertToHumanDate(
        dailyInfo.daily[i].dt
      )}</div>
      <div class="col-12 " style="display: flex; flex-direction: row; justify-content: center">  <img src="
      http://openweathermap.org/img/wn/${
        dailyInfo.daily[i].weather[0].icon
      }@2x.png
      " /></div>
     
      <div class="col-6 daily-high" style="display: flex; flex-direction: row; justify-content: flex-end"><h4>${Math.round(
        (dailyInfo.daily[i].temp.day - 273.15) * (9 / 5) + 32
      )}<span>&#176;</span></h4></div>
      <div class="col-6 daily-low" style="display: flex; flex-direction: row; align-items: center"><h6>${Math.round(
        (dailyInfo.daily[i].temp.night - 273.15) * (9 / 5) + 32
      )}<span style="font-size: 1rem;">&#176;</span></h6></div>
      <div class="col-12 text-center">${
        dailyInfo.daily[i].weather[0].description
      }</div>
    </div>`;
      i++;

      const forecastArea = document.querySelector(".daily-forecast");
      forecastArea.appendChild(details);
    }
  }

  setCelsiusMain(results) {
    //change units of large icon
    document.getElementById("d-degrees-number").innerHTML = `${Math.round(
      results.current.temp - 273.15
    )} <span>&#176;</span> C`;

    //change units of "feels like"
    document.querySelector(".item0").innerHTML = `Feels like ${Math.round(
      results.current.feels_like - 273.15
    )}<span style="font-size: 1rem;">&#176;</span> C`;
  }

  setCelsiusForecast(results) {
    //change units of "Daily high and Daily Low"
    document.querySelectorAll(".daily-high").forEach((element, index) => {
      element.innerHTML = `<h4>${Math.round(
        results.daily[index].temp.day - 273.15
      )}<span>&#176;</span></h4></div>`;
    });
    document.querySelectorAll(".daily-low").forEach((element, index) => {
      element.innerHTML = `<h6>${Math.round(
        results.daily[index].temp.night - 273.15
      )}<span>&#176;</span></h6></div>`;
    });
  }

  setFahrenheitMain(results) {
    //change units of large icon
    document.getElementById("d-degrees-number").innerHTML = `${Math.round(
      (results.current.temp - 273.15) * (9 / 5) + 32
    )} <span>&#176;</span> F`;

    //change units of "feels like"
    document.querySelector(".item0").innerHTML = `Feels like ${Math.round(
      (results.current.feels_like - 273.15) * (9 / 5) + 32
    )}<span style="font-size: 1rem;">&#176;</span>`;
  }

  setFahrenheitForecast(results) {
    //change units of "Daily high and Daily Low"
    document.querySelectorAll(".daily-high").forEach((element, i) => {
      element.innerHTML = `<h4>${Math.round(
        (results.daily[i].temp.day - 273.15) * (9 / 5) + 32
      )}<span>&#176;</span></h4></div>`;
    });

    document.querySelectorAll(".daily-low").forEach((element, i) => {
      element.innerHTML = `<h6>${Math.round(
        (results.daily[i].temp.night - 273.15) * (9 / 5) + 32
      )}<span>&#176;</span></h6></div>`;
    });
  }
  clearweather() {
    //clear main weather
    this.location.innerHTML = ``;
    this.degreesNumber.innerHTML = ``;
    this.description.textContent = "";
    this.lastUpdated.textContent = "";
    this.icon.setAttribute("src", `none`);
    if (document.querySelector(".details").innerHTML != "") {
      document.querySelector(".details").innerHTML = "";
    }

    // clear forecast
    if (document.querySelector(".daily-forecast").innerHTML != "")
      document.querySelector(".daily-forecast").innerHTML = "";
  }
  cityNotFound() {
    // this.showAlert("City not Found", "alert alert-danger");
    const mainContainer = document.querySelector(".main-container");
    mainContainer.className = "main-container d-none";
    const dailyContainer = document.querySelector(".daily-container");
    dailyContainer.className = "daily-container d-none";
  }
  cityFound() {
    const mainContainer = document.querySelector(".main-container");
    mainContainer.className = "main-container";
    const dailyContainer = document.querySelector(".daily-container");
    dailyContainer.className = "daily-container";
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(`${message}`));

    const searchContainer = document.querySelector(".search-container");
    searchContainer.appendChild(div);

    //timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  clearAlert() {
    //get alert
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }
}
