import {
	FETCH_CURRENCIES_PENDING,
	FETCH_CURRENCIES_REJECTED,
	FETCH_CURRENCIES_FULFILLED
}   from '../constants';

const initialState = {
	fetching: false,
	fetched: false,
	items: [],
	error: null
};

export default function currencies(state = initialState, action) {
	switch (action.type) {
		case FETCH_CURRENCIES_PENDING:
			return {
				...state,
				fetching: true
			};
		case FETCH_CURRENCIES_REJECTED:
			return {
				...state,
				fetching: false,
				error: action.payload
			};
		case FETCH_CURRENCIES_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				items: action.payload
			};
		default:
			return state;
	}
}