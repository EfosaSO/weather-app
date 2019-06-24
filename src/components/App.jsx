import React from 'react';
import WeatherResult from './WeatherContainer';
import SearchForm from './SearchForm';
// import { fetchWeather } from '../actions/weatherActions';
import './App.css';

class App extends React.Component {
  /* No longer need constructor as state moved to redux store
  
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      description: undefined,
      error: undefined
    };
  }*/

/*
* Converting to arrow function '=>' allows for global access to 'this'
* Otherwise would have to bind 'this' to getWeather function in constructor
* Like so:
*   constructor(props) {
*    super(props);
*    this.getWeather = this.getWeather.bind(this)
*  }
*/
  getWeather = (e)  =>{
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    this.props.loadWeather(city, country)

    // if (city && country) {
      // fire the request via redux action
      // this.props.loadWeather(city, country);

      // fetchWeather(city, country)
      //   .then((response) => {
      //     this.setState({
      //       temperature: response.main.temp,
      //       city: response.name,
      //       country: response.sys.country,
      //       description: response.weather[0].description,
      //       error: ''
      //     });
      //   })
      //   .catch(e => {
      //     this.setState({
      //       error: `Can't find ${city}, ${country}`,
      //     })
      //   });
    // } else {
      // this.setState({
      //   error: 'Please input search values...'
      // })
    // } 
  }

  render() {
    
    return (
      <div className="app">
        <header className="app-header">
          Weather
        </header>
        <div className="wrapper">
          <div className="main">
            <SearchForm loadWeather={this.getWeather} error={this.props.weather.error} />
            {this.props.weather.map((item, index)=>{
             return (
             <WeatherResult
                temperature={item.temperature}
                city={item.city}
                country={item.country}
                description={item.description}
                index={index}
              />
              )

            })}
          </div>
        </div>
      </div>);
  }
}
export default App;