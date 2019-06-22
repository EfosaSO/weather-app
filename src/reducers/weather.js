import {LOADING_SUCCESS, LOADING_FAILURE} from '../actions/weatherActionTypes'

const initialState = {
  country: undefined,
  city: undefined,
  temperature: undefined,
  description: undefined,
  error: undefined,
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case LOADING_SUCCESS:
      return {
        temperature: action.payload.weather.main.temp,
        city: action.payload.weather.name,
        country: action.payload.weather.sys.country,
        description: action.payload.weather.weather[0].description,
        error: ''
      };
    case LOADING_FAILURE:
      return action.payload.error;
    default:
      return state;
  }
}