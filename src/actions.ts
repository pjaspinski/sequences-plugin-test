import { Action } from 'sequences-types';

const options = ['A', 'B', 'C'].map((option) => ({
	text: option,
	value: option,
}));
const defaultOption = 'A';

const actions: Action[] = [
	{
		id: 0,
		name: 'Number test action',
		settingsInputs: [
			{
				type: 'NUMBER',
				value: 100,
				min: 0,
				max: 100,
				id: 'NumberValue',
				required: true,
				label: 'Number input label',
			},
		],
	},
	{
		id: 1,
		name: 'Text test action',
		settingsInputs: [
			{
				type: 'TEXT',
				value: 'Test value',
				id: 'TextValue',
				required: true,
				label: 'Text input label',
			},
		],
	},
	{
		id: 2,
		name: 'Dropdown test action',
		settingsInputs: [
			{
				type: 'DROPDOWN',
				value: defaultOption,
				placeholder: 'Audio bus',
				options: options,
				id: 'DropdownValue',
				required: true,
				label: 'Dropdown input label',
			},
		],
	},
	{
		id: 3,
		name: 'Checkbox test action',
		settingsInputs: [
			{
				type: 'CHECKBOX',
				value: false,
				id: 'CheckboxValue',
				required: false,
				label: 'Checkbox input label',
			},
		],
	},
];

export default actions;
