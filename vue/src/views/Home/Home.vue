<template>
  <div class="home">
    <Header />
    <HomeSwiper />
    <HomeMovie v-if="show" :obj="obj" />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HomeSwiper from "@/views/Home/HomeSwiper.vue";
import HomeMovie from "@/views/Home/HomeMovie.vue";

export default {
  name: "Home",
  components: {
    Header,
    HomeSwiper,
    HomeMovie,
    Footer,
  },
  data() {
    return {
      show: false,
      obj: "",
    };
  },

  mounted() {
    // console.log(this.$store.state);
    // console.log(process.env);
    const url = process.env.VUE_APP_BASE_JSON + "data.json";
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
