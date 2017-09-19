import {
	FETCH_CURRENCIES_PENDING,
	FETCH_CURRENCIES_REJECTED,
	FETCH_CURRENCIES_FULFILLED
}   from '../constants';

import { fetchData, fetchCurrenciesCost } from '../api/api'
import { transformData } from '../helpers';


function fetchCost(data) {
	return fetchCurrenciesCost(Object.keys(data))
		.then(res => {
			for (let key in data) {
				data[key]['cost'] = res.data[key]
			}
			return data;
		})
		.catch(err => console.log(err));
}

export const fetchCurrencies = () => {
	return (dispatch) => {
		dispatch(onCurrenciesPending);
		
		fetchData()
			.then( response => {
				const data = transformData(response.data.Data);
				return fetchCost(data);
			})
			.then(data => dispatch(onCurrenciesFulfilled(data)))
			.catch(err => dispatch(onCurrenciesRejected(err)));
	}
};


export const onCurrenciesPending = () => ({
	type: FETCH_CURRENCIES_PENDING
});

export const onCurrenciesFulfilled = (data) => ({
	type: FETCH_CURRENCIES_FULFILLED,
	payload: data
});

export const onCurrenciesRejected = (err) => ({
	type: FETCH_CURRENCIES_REJECTED,
	payload: err
});