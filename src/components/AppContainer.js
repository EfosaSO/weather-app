import { connect } from 'react-redux';
import { loadWeather } from '../actions/weatherActions';
import App from './App';

const mapStateToProps = (state) =>  ({
    weather: state.weather
  });

  function mapDispatchToProps(dispatch) {
  return {
    loadWeather: (city, country) => dispatch(loadWeather(city, country)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
