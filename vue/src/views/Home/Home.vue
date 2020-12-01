<template>
  <div class="home">
    <Header />
    <HomeSwiper />
    <HomeMovie v-if="show" :obj="obj" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import HomeSwiper from "@/views/Home/HomeSwiper.vue";
import HomeMovie from "@/views/Home/HomeMovie.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Header,
    HomeSwiper,
    HomeMovie,
  },
  data() {
    return {
      show: false,
      obj: "",
    };
  },

  mounted() {
    const url = "/data.json";
    axios.get(url).then((res) => {
      // console.log(res.data);
      this.obj = res.data;
      this.show = true;
    }),
      (err) => {
        console.log(err);
      };
  },
};
</script>

<style lang="scss" scoped>
</style>
