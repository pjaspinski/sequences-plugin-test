import { PluginTemplate, PluginSettings, Action, ActiveAction } from 'sequences-types';
declare class TestPlugin extends PluginTemplate {
    name: string;
    id: number;
    settingsInputs: import("sequences-types").Input[];
    constructor();
    setup: (options: PluginSettings) => void;
    destroy: () => void;
    getActions: () => Action[];
    handleAction: (action: ActiveAction) => void;
}
export default TestPlugin;
