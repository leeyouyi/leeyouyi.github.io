<template>
  <div>
    <Swiper v-if="list.length > 0">
      <Slide
        v-for="(item, index) in list"
        :key="index"
        :autoPlay="true"
        :showIndicator="true"
        interval="4000"
      >
        <img :src="item.img" />
      </Slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, Slide } from "vue-swiper-component";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    Slide,
  },
  data() {
    return {
      list: [
        { img: require("@/assets/images/banner01.jpg") },
        { img: require("@/assets/images/banner02.jpg") },
        { img: require("@/assets/images/banner03.jpg") },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wh_content {
  width: 100vw;
  height: 350px;
  .wh_slide {
    width: 100%;
    height: 350px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
