import { peek } from '@laufire/utils/debug';
import { keys } from '@laufire/utils/lib';
import React from 'react';

const Table = (context) => {
	const { data } = context;

	peek(data);
	const headers = data.length ? keys(data[0]) : [];

	return (
		<table>
			<thead>
				<tr>{headers.map((header, i) =>
					<th key={ i }>{header}</th>)}
				</tr>
			</thead>
			<tbody>{data.map((detail, i) =>
				<tr key={ i }>
					{headers.map((header, key) =>
						<td key={ key }>{detail[header]}</td>)}
				</tr>)}
			</tbody>
		</table>);
};

export default Table;
