import React from "react";
import WeatherResult from "./WeatherContainer";
import SearchForm from "./SearchForm";
// import { fetchWeather } from '../actions/weatherActions';
import "./App.css";

class App extends React.Component {
  getWeather = e => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    this.props.loadWeather(city, country);
    e.target.elements.city.value = null;
    e.target.elements.country.value = null;
  };

  render() {
    return (
      <div className="app">
        <header className="app-header">Weather</header>
        <div className="wrapper">
          <div className="main">
            <SearchForm
              loadWeather={this.getWeather}
              error={this.props.weather.error}
            />
            {/* Added a conditional to only map here if there are arrays in the object
            else it will produce a ".map undefined" error */}
            {this.props.weather.results.length > 0
              ? this.props.weather.results.map((item, index) => {
                  if (item.city)
                    return (
                      <WeatherResult
                        id={index}
                        key={index}
                        temperature={item.temperature}
                        city={item.city}
                        country={item.country}
                        description={item.description}
                      />
					);
					return null;
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
