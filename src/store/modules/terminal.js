import Command from '../../models/Command';
import ExecuteCommand from '../../commands';

export const ADD_COMMAND = 'ADD_COMMAND';
export const UPDATE_COMMAND_RESULT = 'UPDATE_COMMAND_RESULT';
export const SHOW_COMMAND_LINE = 'SHOW_COMMAND_LINE';
export const HIDE_COMMAND_LINE = 'HIDE_COMMAND_LINE';
export const ERASE_COMMAND_LINE = 'ERASE_COMMAND_LINE';
export const UPDATE_COMMAND_LINE = 'UPDATE_COMMAND_LINE';
export const CLEAR_COMMANDS = 'CLEAR_COMMANDS';

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
  lastCommandResult: (state) => {
    if (state.commands.length === 0) {
      return '';
    }
    return state.commands[state.commands.length - 1].result;
  },
};

// actions
const actions = {
  clearCommands({ commit }) {
    commit(CLEAR_COMMANDS);
  },
  updateCommandLine({ commit }, command) {
    commit(UPDATE_COMMAND_LINE, command);
  },
  executeCommand({ commit, state, getters },
    { command = null, showCommand = true, showCommandLine = true } = {}) {
    commit(HIDE_COMMAND_LINE);
    commit(ADD_COMMAND, new Command(command || state.command, getters.path, showCommand));
    commit(ERASE_COMMAND_LINE);

    const index = state.commands.length - 1;
    const commandResult = ExecuteCommand(state.commands[index].command);
    let result = '';

    if (commandResult.length === 0) {
      commit(SHOW_COMMAND_LINE);
      return;
    }

    for (let i = 0; i < commandResult.length; i += 1) {
      const lettre = commandResult[i];
      setTimeout(() => {
        result += lettre;
        commit(UPDATE_COMMAND_RESULT, { index, result });
        if (result.length === commandResult.length && showCommandLine) {
          commit(SHOW_COMMAND_LINE);
        }
      }, 3 * i);
    }
  },
};

// mutations
const mutations = {
  [ADD_COMMAND](state, command) {
    state.commands = [...state.commands, command];
  },
  [UPDATE_COMMAND_RESULT](state, { index, result }) {
    state.commands[index].result = result;
  },
  [ERASE_COMMAND_LINE](state) {
    state.command = '';
  },
  [HIDE_COMMAND_LINE](state) {
    state.showCommandLine = false;
  },
  [SHOW_COMMAND_LINE](state) {
    state.showCommandLine = true;
  },
  [UPDATE_COMMAND_LINE](state, command) {
    state.command = command;
  },
  [CLEAR_COMMANDS](state) {
    state.commands = [];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
