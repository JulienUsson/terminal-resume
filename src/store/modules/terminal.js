import Command from '../../models/Command';
import DirectoryService from '../../services/DirectoryService';

export const EXECUTE_COMMAND = 'EXECUTE_COMMAND';
export const SHOW_COMMAND_LINE = 'SHOW_COMMAND_LINE';
export const UPDATE_COMMAND = 'UPDATE_COMMAND';

// state
const state = {
  commands: [],
  command: '',
  showCommandLine: false,
};

// getters
const getters = {
  commands: state => state.commands,
  command: state => state.command,
  showCommandLine: state => state.showCommandLine,
};

// actions
const actions = {
  updateCommand({ commit }, command) {
    commit(UPDATE_COMMAND, command);
  },
  executeCommand({ commit }, payload) {
    commit(EXECUTE_COMMAND, payload);
    commit(SHOW_COMMAND_LINE);
  },
};

// mutations
const mutations = {
  [EXECUTE_COMMAND](state, { command = null, showCommand = true } = {}) {
    state.showCommandLine = false;
    const newCommand = new Command(command || state.command, DirectoryService.path, showCommand);
    state.commands = [...state.commands, newCommand];
    state.command = '';
  },
  [SHOW_COMMAND_LINE](state) {
    state.showCommandLine = true;
  },
  [UPDATE_COMMAND](state, command) {
    state.command = command;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production',
};
