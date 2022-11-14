import { PluginTemplate, PluginSettings, Action, ActiveAction } from 'sequences-types';
import actions from './actions';
import settingsInputs from './settingsInputs';

class TestPlugin extends PluginTemplate {
	name = 'Test';
	id = 1;
	settingsInputs = settingsInputs;

	constructor() {
		super();
	}

	setup = (options: PluginSettings) => {
		const { ip, port } = options;
		this.setStatus('LOADING');

		setTimeout(() => {
			if (ip !== '127.0.0.1' || port !== '2222') {
				this.setStatus('ERROR');
			} else {
				this.setStatus('RUNNING');
			}
		}, 2000);
	};

	destroy = () => {};

	getActions = () => {
		return actions;
	};

	handleAction = (action: ActiveAction) => {
		console.log(`Handling action: ${action}`);
	};
}

export default TestPlugin;
