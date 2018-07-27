/**
 * Created by Johnny on 2018/7/27.
 */

export default {
  state: {
    len: 4
  },
  // 对数据如果需要精缺处理可以添加
  getters: {
    len: state => state.len
  },
  mutations: {
    CHANGE_LEG (state, payload) {
      state.len = payload
    }
  },
  actions: {
    AchangeLen ({commit}, payload) {
      commit('CHANGE_LEG', payload)
    }
  }
}
