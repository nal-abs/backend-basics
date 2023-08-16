/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Table from './components/Table';

const dataUrl = 'https://jsonplaceholder.typicode.com/todos';

const api = async ({ actions }) => {
	const { data } = await axios.get(dataUrl);

	actions.updateData(data);
};
const App = (context) => {
	useEffect(() => api(context), []);

	return <div className="App">
		<Table { ...context }/>
	</div>;
};

export default App;
