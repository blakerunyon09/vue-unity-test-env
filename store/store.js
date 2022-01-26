import { createStore, createLogger } from 'vuex'
import menu from '../src/components/menu/store/menu'

export const store = createStore({
  plugins: [createLogger()],
  modules: {
    menu,
  },
})
