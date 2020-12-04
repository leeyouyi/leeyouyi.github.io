<template>
  <div id="app">
    <router-view />
    <Login v-if="this.$store.state.mask" />
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
export default {
  components: {
    Login,
  },
  created() {
    this.$store.dispatch("actionScreen", window.screen.width);
    // console.log(this.$store.state.screen);
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
