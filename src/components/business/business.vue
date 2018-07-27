<template>
  <div>
    <h2>this a business temp</h2>
    <p>len : {{business.len}}</p>
    <p>len : {{len}}</p>
    <button @click="addLen">add double Len</button>
  </div>

</template>

<script type="text/ecmascript-6">
// import { mapState } from 'vuex'
export default{
  data () {
    return {}
  },
  computed: {
    //    ...mapState([
    //      'business'
    //    ]),
    //    len () {
    //      return this.$store.state.business.len
    //    },
    business () {
      return this.$store.state.business
    },
    len () {
      return this.business.len
    }
  },
  methods: {
    addLen () {
      let {len} = this
      let newLen = Number(len) + 2
      console.log(newLen)
      this.$store.commit('CHANGE_LEG', newLen)
    }
  },
  watch: {}
}
</script>
