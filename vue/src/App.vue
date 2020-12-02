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
