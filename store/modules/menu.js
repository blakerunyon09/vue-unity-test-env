import axios from 'axios'

export default {
  state: () => {
    return {
      menuFileStructure: null,
      problems: null,
      tabPointer: 'tab1',
      menuPointer: 'tab1'
    }
  },
  mutations: {
    setMenuFileStructure(state, payload) {
      state.menuFileStructure = payload
    },
    setMenuPointer(state, payload) {
      state.menuPointer = payload
    },
    setProblems(state, payload) {
      state.problems = payload
    }
  },
  actions: {
    async setMenuFileStructure(state) {
      const response = await axios.get(
        `${process.env.VUE_APP_APIBASE}/menuFileStructures/${process.env.VUE_APP_MENU}`, {
        headers: { authorization: process.env.VUE_APP_MOCKAUTH }
      })
      state.commit('setMenuFileStructure', response.data.data[0].jsonFileStructure)
    },
    async setProblems(state) {
      const response = await axios.get(
        `${process.env.VUE_APP_APIBASE}/problems`, {
        headers: { authorization: process.env.VUE_APP_MOCKAUTH }
      })
      state.commit('setProblems', response.data.data)
    },
    setMenuPointer(state, payload) {
      state.commit('setMenuPointer', payload)
    }
  }
}