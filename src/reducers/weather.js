import {
	LOADING_SUCCESS,
	LOADING_FAILURE,
	REMOVE_RESULT,
	EMPTY_SEARCH,
} from "../actions/weatherActionTypes";

const initialState = [];

export default function weather(state = initialState, action) {
	switch (action.type) {
		case LOADING_SUCCESS:
			return [
				...state,
				{
					temperature: action.payload.weather.main.temp,
					city: action.payload.weather.name,
					country: action.payload.weather.sys.country,
					description: action.payload.weather.weather[0].description,
				},
			];
		case REMOVE_RESULT:
			return state.filter((weather, index) => {
				return index !== action.payload.id;
			});

		case LOADING_FAILURE:
			return {
				error: `Can't find ${action.payload.error.city}, ${
					action.payload.error.country
				}`,
			};

			case EMPTY_SEARCH:
				return action.payload.error;
				
		default:
			return state;
	}
}
