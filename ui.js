class Display {
  constructor() {
    this.location = document.getElementById("d-location");
    this.degreesNumber = document.getElementById("d-degrees-number");
    // this.degreesIcon = document.getElementById("d-degrees-icon");
    this.description = document.getElementById("d-description");
    this.lastUpdated = document.getElementById("d-last-updated");
    this.changeUnits = document.getElementById("change-units");
    this.icon = document.getElementById("d-icon");
  }
  displayDetails(results) {
    let i = 0;
    while (i < 6) {
      let details = document.createElement("div");
      details.className = `col-4 border border-success item${i}`;
      i++;
      details.textContent = "wassup";
      console.log(details);
      const detailArea = document.querySelector(".details");
      detailArea.appendChild(details);
    }
    document.querySelector(".item0").innerHTML = `Feels like ${Math.round(
      results.main.feels_like
    )}<span style="font-size: 1rem;">&#176;</span>`;
    document.querySelector(".item1").textContent = `Humidity: ${Math.round(
      results.main.humidity
    )}%`;
    document.querySelector(".item2").textContent = `wind speed ${Math.round(
      results.wind.speed
    )} mph`;
    // console.log(details);
  }
  displayFirst(results) {
    console.log(results);
    this.location.textContent = results.name;
    this.degreesNumber.innerHTML = `${Math.round(
      results.main.temp - 273.15
    )} <span>&#176;</span>`;
    // this.degreesIcon.innerHTML = `<span style="font-size: 6vmax;">&#176;</span>`;
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
}

// ${results.weather[0].icon}
