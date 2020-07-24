class Weather {
  constructor(city, state, zipcode) {
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
  }

  //fetch weather from API
  async getWeather() {
    const response = await fetch(`/weather/${this.city}`);
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }
  async getForecast() {
    const response = await fetch(`/forecast/${this.city}`);
    const responseData = await response.json();
    return responseData;
  }
}
