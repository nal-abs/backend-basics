import { keys } from '@laufire/utils/lib';
import React from 'react';

const Table = (context) => {
	const { state: { details }} = context;
	const headers = details.length ? keys(details[0]) : [];

	return (
		<table>
			<thead>
				<tr>{headers.map((header, i) =>
					<th key={ i }>{header}</th>)}
				</tr>
			</thead>
			<tbody>{details.map((detail, i) =>
				<tr key={ i }>
					{headers.map((header, key) =>
						<td key={ key }>{detail[header]}</td>)}
				</tr>)}
			</tbody>
		</table>);
};

export default Table;
