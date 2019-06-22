import { START_LOADING, LOADING_SUCCESS, LOADING_FAILURE } from "./weatherActionTypes";

const Api_Key = '54360e056cc0866724607dadfbe71bc2';

export function fetchWeather(city, country) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`)
    .then(res => {
      if (res.status !== 200) {
        throw Error(res.json());
      }
      return res.json();
    });
}

function startLoading() {
  return {
    type: START_LOADING,
  };
}

function loadWeatherSuccess(weather) {
  return {
    type: LOADING_SUCCESS,
    payload: {
      weather,
    },
  }
}

function loadWeatherFailure(error) {
  return {
    type: LOADING_FAILURE,
    payload: {
      error,
    }
  };
}

export function loadWeather(city, country) {
  return dispatch => {
    dispatch(startLoading());

    if (city && country) {
    return fetchWeather(city, country)
      .then(response => dispatch(loadWeatherSuccess(response)))
      .catch(error => dispatch(loadWeatherFailure(error)));
    } else {
      return dispatch(loadWeatherFailure({error:"Please input search values..."}))
    }
  }
}