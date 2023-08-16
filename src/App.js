/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import Table from './components/Table';

const dataUrl = 'https://jsonplaceholder.typicode.com/apples';

const getData = async (setState) => {
	try {
		const { data } = await axios.get(dataUrl);

		setState({ data });
	}
	catch (error) {
		setState({ error });
	}
};

const App = (context) => {
	const [state, setState] = useState({ data: [], error: '' });

	useEffect(() => getData(setState), []);

	return <div className="App">
		{state.error
			? state.error.message
			: <Table { ...{ ...context, data: state.data } }/>}
	</div>;
};

export default App;
