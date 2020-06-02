import axios from 'axios';

export default {
  getCityWeather,
  getEmptyCityWeather
};

const Axios = axios.create({
  withCredentials: true
});

function getCityWeather(city) {
  let ans = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=9dd49df93e5a94a317c213cf7fca174f`);
  return ans.then(res => {
    let { data } = res;
    return data;
  });
}

function getEmptyCityWeather() {
  return {
    "coord":{"lon":-0.13,"lat":51.51},
    "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
    "base":"stations",
    "main":{"temp":297.31,"feels_like":293.71,"temp_min":296.15,"temp_max":298.15,"pressure":1018,"humidity":33},
    "visibility":10000,
    "wind":{"speed":4.1,"deg":310},
    "clouds":{"all":98},
    "dt":1591105054,
    "sys":{"type":1,"id":1414,"country":"GB","sunrise":1591069687,"sunset":1591128561},
    "timezone":3600,
    "id":2643743,
    "name":"London",
    "cod":200
  }
}
