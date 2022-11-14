"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequences_types_1 = require("sequences-types");
const actions_1 = __importDefault(require("./actions"));
const settingsInputs_1 = __importDefault(require("./settingsInputs"));
class TestPlugin extends sequences_types_1.PluginTemplate {
    constructor() {
        super();
        this.name = 'Test';
        this.id = 1;
        this.settingsInputs = settingsInputs_1.default;
        this.setup = (options) => {
            const { ip, port } = options;
            this.setStatus('LOADING');
            setTimeout(() => {
                if (ip !== '127.0.0.1' || port !== '2222') {
                    this.setStatus('ERROR');
                }
                else {
                    this.setStatus('RUNNING');
                }
            }, 2000);
        };
        this.destroy = () => { };
        this.getActions = () => {
            return actions_1.default;
        };
        this.handleAction = (action) => {
            console.log(`Handling action: ${action}`);
        };
    }
}
exports.default = TestPlugin;
