import axios from 'axios';

const base_url = 'https://www.cryptocompare.com/api/';
const cost_url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=';
const proxy = 'https://cors-anywhere.herokuapp.com'; //for CORS

export function fetchData() {
	return axios.get(`${proxy}/${base_url}/data/coinlist`);
}

export function fetchCurrenciesCost(currencies) {
	return axios.get(`${cost_url}${currencies.join(',')}&tsyms=USD`);
}