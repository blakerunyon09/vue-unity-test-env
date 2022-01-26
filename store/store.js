import { createStore, createLogger } from 'vuex'
import menu from './modules/menu'

export const store = createStore({
  plugins: [createLogger()],
  modules: {
    menu,
  },
})
