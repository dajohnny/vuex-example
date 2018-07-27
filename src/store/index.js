/**
 * Created by Johnny on 2018/7/27.
 */
import vue from 'vue'
import Vuex from 'vuex'
import business from './modules/moduleA'
vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age: 25
  },
  // 对数据如果需要精缺处理可以添加
  getters: {
    age: state => state.age
  },
  mutations: {
    CHANGE_AGE (state, payload) {
      state.age = payload
    }
  },
  actions: {
    AchangeAge ({commit}, payload) {
      commit('CHANGE_AGE', payload)
    }
  },
  modules: {
    business
  }
})
