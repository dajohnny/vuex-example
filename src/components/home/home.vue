<template>
  <div>
    this a home temp
    <!--<p>HomeAge : {{HomeAge}}</p>-->
    <p>age : {{age}}</p>
    <p>gettersAge: {{gettersAge}}</p>
    <p>stateAge: {{stateAge}}</p>

    <button @click="changeAge(1)"> 生日快乐</button>
    <button @click="changeAge(-1)"> 帮我年轻一岁</button>
  </div>

</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default{
  data () {
    return {
      dataAge: 100
    }
  },
  computed: {
    //    ...mapGetters([
    //      'age'
    //    ]),
    //    ...mapGetters({
    //      HomeAge: 'age'
    //    }),
    //    gettersAge () {
    //      return this.$store.getters.age
    //    },
    ...mapState({
      stateAge: 'age'
    }),
    ...mapState([
      'age'
    ]),
    gettersAge () {
      return this.$store.state.age
    }
  },
  methods: {
    changeAge (age) {
      let newAge = Number(this.stateAge) + age
      this.$store.commit('CHANGE_AGE', newAge)
    }
  },
  watch: {}
}
</script>
