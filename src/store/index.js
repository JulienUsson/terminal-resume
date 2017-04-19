import Vue from 'vue';
import Vuex from 'vuex';
import terminal from './modules/terminal';
import resume from './modules/resume';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    terminal,
    resume,
  },
  strict: process.env.NODE_ENV !== 'production',
});
