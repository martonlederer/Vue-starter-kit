export default {

  state: {

    example: '',
    loadedState: ''

  },
  getters: {

    example: state => state.example,
    loadedState: state => state.loadedState

  },
  //async
  actions: {

    async loadSomething({ state, commit }) {

      if(state.loadedState == '') {

        //fetching something
        setTimeout(() => {

          commit('SET_LOADED', 'looaded value')

        }, 1000)

      }

    },
    addSomething ({ commit }, something) {

      commit('ADD_SOMETHING', something)

    }

  },
  //sync
  mutations: {

    ADD_SOMETHING(state, example) {

      state.example = example

    },
    SET_LOADED(state, loadedValue) {

      state.loadedState = loadedValue

    }

  }

}
