import React, { useState, useEffect } from "react";
import weatherService from "../services/weatherService";

export default function GuessForm(props) {
  const [city, setCity] = useState(weatherService.getEmptyCityWeather());

  useEffect(() => {}, []);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const cityData = await weatherService.getCityWeather(city);
    setCity(cityData);
  };

  function handleChange(ev) {
    const { name, value } = ev.target;
    setCity({ ...city, [name]: value });
  }

  return (
    <div className="guessForm">
      <form className="guessForm-body" onSubmit={onFormSubmit}>
        <div className="form-field">
          <input
            name="name"
            placeholder="city name"
            value={city.name}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">Check</button>
      </form>
    </div>
  );
}
