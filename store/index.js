import Vue from 'vue';
import vuex from 'vuex';

import market from './market.js';

const storeModules = {
  exchangeMarket: market
};

Vue.use(vuex);

const store = () => {
  let store = new vuex.Store();
  for (const moduleName in storeModules) {
    store.registerModule(moduleName, storeModules[moduleName]);
  }
  store.dispatch('updateMarketMap');
  return store;
};

export default store;
