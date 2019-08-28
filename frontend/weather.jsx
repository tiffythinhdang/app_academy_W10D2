import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: this.getLocation() };
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(this.fetchWeather(position));
  }


  fetchWeather(position) {
    let xmlhttp = new XMLHttpRequest();
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=4d525cd3c5d3948af0910709e65946e3`;
    const method = 'GET';

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4) {   
        if (xmlhttp.status === 200) {
          let weatherDescription = xmlhttp.responseText.weather.description;
          let weatherTemp = xmlhttp.responseText.main.temp;

          this.setState({ weather: [weatherDescription, weatherTemp] });
        }
        else if (xmlhttp.status === 400) {
          alert('There was an error 400');
        }
        else {
          alert('something else other than 200 was returned');
        }
      }
    };

    xmlhttp.open(method, url);
    xmlhttp.send();
  }

  render() {
    return ( 
      <div className="weather">
        <h1>{this.weather.weatherDescription}</h1>
        <h1>{this.weather.weatherTemp}</h1>
      </div>
    );
  }

}



export default Weather;