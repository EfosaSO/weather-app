import { connect } from 'react-redux';


import { removeResult } from '../actions/weatherActions';
import WeatherResult from './WeatherResult';


  function mapDispatchToProps(dispatch) {
  return {
    removeWeather: (index) => dispatch(removeResult(index)),
  };
}

export default connect(null,mapDispatchToProps)(WeatherResult);
