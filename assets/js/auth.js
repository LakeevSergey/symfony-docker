require('../css/auth.css');

import Vue from 'vue';
import Vuex from 'vuex';
import auth from '../../vue/modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    actions: {},
    mutations: {},
    getters: {},  
    modules: {
    	auth
    }
});
