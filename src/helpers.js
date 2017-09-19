export function transformData(data) {
	let newDataObj = {};
	const keys = Object.keys(data);
	for (let i = 0; i < 10; i++ ) {
		newDataObj[keys[i]] = data[keys[i]]
	}
	return newDataObj;
}