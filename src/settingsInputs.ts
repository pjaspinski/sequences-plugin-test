import { Input } from 'sequences-types';

const settingsInputs: Input[] = [
	{
		type: 'TEXT',
		id: 'ip',
		required: true,
		value: '127.0.0.1',
		regex: '^[0-9]+.[0-9]+.[0-9]+.[0-9]+$',
		label: 'IP address (127.0.0.1 will work)',
	},
	{
		type: 'TEXT',
		id: 'port',
		required: true,
		value: '8099',
		regex: '^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$',
		label: "Port (2222 will work)",
	},
];

export default settingsInputs;
