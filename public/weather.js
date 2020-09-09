// const { response } = require("express");

class Weather {
  constructor(city, lat, lon) {
    this.city = city;
    this.lat = lat;
    this.lon = lon;
    city = "wooster";
  }

  //fetch weather from API
  async getWeather() {
    const address = await fetch(`latlon/${this.city}`).then((response) =>
      response.json()
    );
    return address;
  }

  async getReturnWeather() {
    const latLon = await fetch(`latlon/${this.city}`).then((response) =>
      response.json()
    );
    this.latLon = latLon.results[0].geometry.location;
    this.lat = this.latLon.lat;
    this.lon = this.latLon.lng;
    const response = await fetch(
      `oneCallWeather/${this.lat}/${this.lon}`
    ).then((response) => response.json());
    console.log(response);
    return response;
  }
}
