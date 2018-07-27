<template>
  <div>
    this a info temp
    <button @click="gotoRouter('info','111')">Info 111</button>
    <button @click="gotoRouter('info','222')">Info 222</button>
    <br>
    {{$route.params}}
    <p>myStore.age : {{age}}</p>
    <input type="text" v-model="myage">
    mapAChange
    <br>
    <button @click="mapAChange">mapActions改变Store数据</button>
    <button @click="aChange">actions改变Store数据</button>
    <br>
    <button @click="mapChange">mapMutations改变Store数据</button>
    <button @click="mChange">mutations改变Store数据</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default{
  data () {
    return {
      myage: 0
    }
  },
  computed: {
    ...mapGetters([
      'age'
    ])
  },
  methods: {
    ...mapMutations([
      'CHANGE_AGE'
    ]),
    ...mapActions([
      'AchangeAge'
    ]),
    gotoRouter (name, infoId) {
      this.$router.push({name, params: {infoId}})
    },
    // 4: 组件中引入调用actions
    mapAChange () {
      let {myage} = this
      this.AchangeAge(myage)
    },
    // 3: 组件中直接调用actions
    aChange () {
      let {myage} = this
      this.$store.dispatch('AchangeAge', myage)
    },
    // 2：mapMutations 去改变store数据
    mapChange () {
      let {myage} = this
      this.CHANGE_AGE(myage)
    },
    // 1：mutations 去改变store数据
    mChange () {
      let {myage} = this
      this.$store.commit('CHANGE_AGE', myage)
    }
  },
  watch: {}
}
</script>
