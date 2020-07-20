class Display {
  constructor() {
    this.location = document.getElementById("d-location");
    this.degreesNumber = document.getElementById("d-degrees-number");
    this.description = document.getElementById("d-description");
    this.lastUpdated = document.getElementById("d-last-updated");
    this.changeUnits = document.getElementById("change-units");
    this.icon = document.getElementById("d-icon");
    this.dailyIcon1 = document.querySelector(".d-icon-1");
    this.dailyIcon2 = document.querySelector(".d-icon-2");
    this.dailyIcon3 = document.querySelector(".d-icon-3");
    this.dailyIcon4 = document.querySelector(".d-icon-4");
    this.dailyIcon5 = document.querySelector(".d-icon-5");
    this.dailyIcon6 = document.querySelector(".d-icon-6");
    this.dailyIcon7 = document.querySelector(".d-icon-7");
  }
  displayDetails(results) {
    let i = 0;
    while (i < 6) {
      let details = document.createElement("div");
      details.className = `col-4  item${i}`;
      i++;
      details.textContent = "wassup";
      console.log(details);
      const detailArea = document.querySelector(".details");
      detailArea.appendChild(details);
    }
    document.querySelector(".item0").innerHTML = `Feels like ${Math.round(
      results.main.feels_like - 273.15
    )}<span style="font-size: 1rem;">&#176;</span>`;
    document.querySelector(".item1").textContent = `Humidity: ${Math.round(
      results.main.humidity
    )}%`;
    document.querySelector(".item2").textContent = `wind speed ${Math.round(
      results.wind.speed
    )} mph`;
  }
  displayFirst(results) {
    console.log(results);
    this.location.innerHTML = `<h3>${results.name}</h3>`;
    this.degreesNumber.innerHTML = `${Math.round(
      results.main.temp - 273.15
    )} <span>&#176;</span>`;
    this.description.textContent = results.weather[0].description;
    console.log(results.weather[0].description);
    this.lastUpdated.textContent = `Updated as of now`;
    this.changeUnits.addEventListener("click", (e) => {
      //change color of clicked item and other to white
      //update number
    });
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`
    );
  }

  displayDailyForecast(results) {
    let i = 0;
    while (i <= 6) {
      let details = document.createElement("div");
      details.className = `ml-3 mb-3 col-xl-2 col-lg-2 col-md-3 col-sm-4 forecast${
        i + 1
      }`;
      details.setAttribute(
        "style",
        "background-color: #1b7ca4; border-radius: 3px"
      );
      details.innerHTML = `              <div class="row">
      <div class="col-12 text-center">${results.list[i + 1].dt_txt}</div>
      <div class="col-12 " style="display: flex; flex-direction: row; justify-content: center">  <img src="
      http://openweathermap.org/img/wn/${
        results.list[i + 1].weather[0].icon
      }@2x.png
      " /></div>
     
      <div class="col-6 daily-high" style="display: flex; flex-direction: row; justify-content: flex-end"><h4>${Math.round(
        results.list[i + 1].main.temp_max - 273.15
      )}<span>&#176;</span></h4></div>
      <div class="col-6 daily-low" style="display: flex; flex-direction: row; align-items: center"><h6>${Math.round(
        results.list[i + 1].main.temp_min - 273.15
      )}<span style="font-size: 1rem;">&#176;</span></h6></div>
      <div class="col-12 text-center">${
        results.list[i + 1].weather[0].description
      }</div>
    </div>`;
      i++;

      console.log(details);
      const forecastArea = document.querySelector(".daily-forecast");
      forecastArea.appendChild(details);
    }
  }

  setCelsiusMain(results) {
    console.log("logged");

    //change units of large icon
    document.getElementById("d-degrees-number").innerHTML = `${Math.round(
      results.main.temp - 273.15
    )} <span>&#176;</span>`;

    //change units of "feels like"
    document.querySelector(".item0").innerHTML = `Feels like ${Math.round(
      results.main.feels_like - 273.15
    )}<span style="font-size: 1rem;">&#176;</span>`;
  }

  setCelsiusForecast(results) {
    console.log("logged here");
    //change units of "Daily high and Daily Low"
    document.querySelectorAll(".daily-high").forEach((element, index) => {
      element.innerHTML = `<h4>${Math.round(
        results.list[index + 1].main.temp_max - 273.15
      )}<span>&#176;</span></h4></div>`;

      // element.innerHTML = `<h6>${Math.round(
      //   results.list[index + 1].main.temp_min + 273.15
      // )}<span style="font-size: 1rem;">&#176;</span></h6>`;
    });
    document.querySelectorAll(".daily-low").forEach((element, index) => {
      console.log(element);
      element.innerHTML = `<h6>${Math.round(
        results.list[index + 1].main.temp_min - 273.15
      )}<span>&#176;</span></h6></div>`;
    });
  }

  setFahrenheitMain(results) {
    console.log("logged");

    //change units of large icon
    document.getElementById("d-degrees-number").innerHTML = `${Math.round(
      (results.main.temp - 273.15) * (9 / 5) + 32
    )} <span>&#176;</span>`;

    //change units of "feels like"
    document.querySelector(".item0").innerHTML = `Feels like ${Math.round(
      (results.main.feels_like - 273.15) * (9 / 5) + 32
    )}<span style="font-size: 1rem;">&#176;</span>`;
  }

  setFahrenheitForecast(results) {
    //change units of "Daily high and Daily Low"
    document.querySelectorAll(".daily-high").forEach((element, index) => {
      element.innerHTML = `<h4>${Math.round(
        (results.list[index + 1].main.temp_max - 273.15) * (9 / 5) + 32
      )}<span>&#176;</span></h4></div>`;
    });

    document.querySelectorAll(".daily-low").forEach((element, index) => {
      console.log(element);
      element.innerHTML = `<h6>${Math.round(
        (results.list[index + 1].main.temp_min - 273.15) * (9 / 5) + 32
      )}<span>&#176;</span></h6></div>`;
    });
  }
}
