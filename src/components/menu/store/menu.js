import axios from 'axios'
import {
  SET_MENU_FILE_STRUCTURE, 
  SET_PROBLEMS,
  SET_MENU_POINTER
} from '../../../../store/types'

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
    [SET_MENU_FILE_STRUCTURE](state, payload) {
      state.menuFileStructure = payload
    },
    [SET_MENU_POINTER](state, payload) {
      state.menuPointer = payload
    },
    [SET_PROBLEMS](state, payload) {
      state.problems = payload
    }
  },
  actions: {
    async setMenuFileStructure(context) {
      const response = await axios.get(
        `${process.env.VUE_APP_APIBASE}/menuFileStructures/${process.env.VUE_APP_MENU}`, {
        headers: { authorization: process.env.VUE_APP_MOCKAUTH }
      })
      context.commit(SET_MENU_FILE_STRUCTURE, response.data.data[0].jsonFileStructure)
    },
    async setProblems(context) {
      const response = await axios.get(
        `${process.env.VUE_APP_APIBASE}/problems`, {
        headers: { authorization: process.env.VUE_APP_MOCKAUTH }
      })
      context.commit(SET_PROBLEMS, response.data.data)
    },
  }
}