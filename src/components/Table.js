import React from 'react';


const image_baseUrl = 'https://www.cryptocompare.com';

const Thead = () => (
	<thead>
	<tr>
		<td>#</td>
		<td>Image</td>
		<td>Name</td>
		<td>Cost (USD)</td>
	</tr>
	</thead>
);


const CurrencyItem = ({index, name, imageUrl, cost}) => (
	<tr>
		<td>{index + 1}</td>
		<td>
			<img src={`${image_baseUrl}${imageUrl}`} alt="avatar"/>
		</td>
		<td>{name}</td>
		<td>{cost['USD']}</td>
	</tr>
);

const CurrenciesList = ({items}) => (
	<tbody>
	{items.map((item, i) =>
			<CurrencyItem key={item['Id']}
			              index={i}
			              name={item['FullName']}
			              cost={item.cost}
			              imageUrl={item['ImageUrl']}/>
		)}
	</tbody>
);


const Table = ({items}) => (
	<table>
		<Thead/>
		<CurrenciesList items={items}/>
	</table>
);

export default Table;