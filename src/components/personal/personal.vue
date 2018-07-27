<template>
  <div>
    <!-- common -->
    <h2>here is common information：{{ $route.name }}</h2>

    <!--nav-->
    <span>子路有切换：</span>
    <button @click="gotoRouter('project')">Project</button>
    <button @click="gotoRouter('info')">Info</button>

    <!-- router-view -->
    <div class="child-view">
      show router-child-view
      <router-view />
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default{
  data () {
    return {}
  },
  methods: {
    gotoRouter (name) {
      this.$router.push(name)
    }
  },
  watch: {}
}
</script>

<style lang="scss">
  .child-view {
    width: 500px;
    margin: 0 auto;
    background: #ededed;
    padding: 20px;
  }
</style>
