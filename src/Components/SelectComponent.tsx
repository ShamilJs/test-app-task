import { Select } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { LocationType } from '../types/typesApp';
import { formationOfParams } from './Functions/functions';

type TargetPropsType = {
	options: string[]
	filterName: string
	value: string
};

export const SelectComponent: React.FC<TargetPropsType & LocationType> = props => {
	let history = useHistory();
	const { Option } = Select;
	let { children, options, filterName, value, ...location } = props;


	const currentLocation = (): void => {
		location.page =  1;
		const params: string = formationOfParams({ ...location });
		history.push(params);
	};

	const handleChange = (value: string): void => {
		const statusValue = value === 'not selected' ? '' : value;
		location = {...location, [filterName]: statusValue}
		currentLocation();
	};

	return (
		<Select
			defaultValue="not selected"
			onChange={handleChange}
			style={{ width: '15%', marginLeft: '20px' }}
			size="large"
			value={value ? value : "not selected"}
			>
			{props.options.map((item, i) => <Option key={i} value={item}>{item}</Option>)}
		</Select>
	);
};