import {
	LOADING_SUCCESS,
	LOADING_FAILURE,
	REMOVE_RESULT,
	EMPTY_SEARCH
} from "../actions/weatherActionTypes";

const initialState = {
	results: [],
	error: null
};

export default function weather(state = initialState, action) {
	switch (action.type) {
		case LOADING_SUCCESS:
			return {
				...state,
				error: null, // Reset errors here
				results: [
					...state.results,
					{
						temperature: action.payload.weather.main.temp,
						city: action.payload.weather.name,
						country: action.payload.weather.sys.country,
						description: action.payload.weather.weather[0].description
					}
				]
			};
		case REMOVE_RESULT:
			// Refactored, was returning state before and changing object structure
			state.results = state.results.filter((weather, index) => {
				return index !== action.payload.key;
			});
			return {
				...state
			};

		case LOADING_FAILURE:
			return {
				// Spreading state here to keep existing valid items for UX improvements
				...state,
				error: `Can't find ${action.payload.error.city}, ${
					action.payload.error.country
				}`
			};

		case EMPTY_SEARCH:
			return {
				...state,
				error: action.payload.error
			};

		default:
			return state;
	}
}
