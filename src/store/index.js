import Vue from 'vue';
import Vuex from 'vuex';
import terminal from './modules/terminal';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    terminal,
  },
});
