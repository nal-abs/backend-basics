/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import Table from './components/Table';

const dataUrl = 'https://jsonplaceholder.typicode.com/todos';

const getData = async (setState) => {
	const { data } = await axios.get(dataUrl);

	setState(data);
};
const App = (context) => {
	const [state, setState] = useState([]);

	useEffect(() => getData(setState), []);

	return <div className="App">
		<Table { ...{ ...context, data: state } }/>
	</div>;
};

export default App;
