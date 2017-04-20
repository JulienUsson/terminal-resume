import Vue from 'vue';
import Vuex from 'vuex';
import terminal from './modules/terminal';
import fileSystem from './modules/fileSystem';
import resume from './modules/resume';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    terminal,
    fileSystem,
    resume,
  },
  strict: process.env.NODE_ENV !== 'production',
});
