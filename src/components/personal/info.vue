<template>
  <div>
    this a info temp
    <button @click="gotoRouter('info','111')">Info 111</button>
    <button @click="gotoRouter('info','222')">Info 222</button>
    <br>
    {{$route.params}}
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  data () {
    return {}
  },
  created () {
  },
  methods: {
    gotoRouter (name, infoId) {
      this.$router.push({name, params: {infoId}})
    }
  },
  watch: {}
}
</script>
