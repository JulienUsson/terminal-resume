import axios from 'axios';
import { CREATE_FILE_SYSTEM } from './fileSystem';

const RESUME_DATA_URL = 'https://julien.usson.dev/json-resume/resume-fr.json';
export const GET_RESUME_DATA = 'GET_RESUME_DATA';

// state
const state = {
  resume: {},
};

// getters
const getters = {
  resume: state => state.resume,
};

// actions
const actions = {
  getResumeData({ commit, dispatch }) {
    axios.get(RESUME_DATA_URL)
      .then((response) => {
        commit(GET_RESUME_DATA, response.data);
        dispatch('executeCommand', {
          command: 'motd',
          showCommand: false,
        });
        commit(CREATE_FILE_SYSTEM, state.resume);
      })
      .catch((error) => {
        dispatch('executeCommand', {
          command: `echo ${error}`,
          showCommand: false,
          showCommandLine: false,
        });
      });
  },
};

// mutations
const mutations = {
  [GET_RESUME_DATA](state, resume) {
    state.resume = resume;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
