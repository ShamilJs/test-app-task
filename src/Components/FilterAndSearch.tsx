import React from 'react';
import { Input, Select } from 'antd';
import { useHistory } from 'react-router-dom';

type TargetPropsType = {
	pathname: string
	page: number
	name: string
	status: string
};

export const FilterAndSearch: React.FC<TargetPropsType> = props => {
	let history = useHistory();

	const { Option } = Select;

	const onSearch = (value: string): void => 
		history.push(`${props.pathname}/?page=1&name=${value}&status=${props.status}`);

	const handleChange = (value: string): void => {
		const statusValue = value === 'not selected' ? '' : value;
		history.push(`${props.pathname}/?page=1&name=${props.name}&status=${statusValue}`);
	};

	return (
		<Input.Group compact
			style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<Input.Search
				style={{ width: '50%' }}
				placeholder="input search text"
				onSearch={onSearch}
				enterButton
				size="large"
				allowClear={true}
			/>
			<Select
				defaultValue="not selected"
				onChange={handleChange}
				style={{ width: '15%', marginLeft: '20px' }} size="large"
				value={props.status}
			>
				<Option value="not selected">Not selected</Option>
				<Option value="alive">Alive</Option>
				<Option value="dead">Dead</Option>
				<Option value="unknown">unknown</Option>
			</Select>
		</Input.Group>
	);
};