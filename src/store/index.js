import { createStore } from 'vuex'

export default createStore({
  state: {
    isThemeDark: false
  },
  getters: {
  },
  mutations: {
    changeThemeValue(state, payload) {
        state.isThemeDark = payload;
    }
  },
  actions: {
    toggleTheme({commit, state}) {
        localStorage.setItem('isThemeDark', !state.isThemeDark);
        commit('changeThemeValue', !state.isThemeDark);

    },
    initStore({commit}) {
        const themeValue = localStorage.getItem('isThemeDark');
        if(themeValue !== null)
            commit('changeThemeValue', JSON.parse(themeValue));
    }
  },
  modules: {
  }
})
