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

    <!-- <swiper
      ref="mySwiper"
      :options="swiperOptions"
      v-if="list && list.length > 0"
    >
      <swiper-slide v-for="(item, index) in list" :key="index">
        <img :src="item.img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper> -->
  </div>
</template>

<script>
import { Swiper, Slide } from "vue-swiper-component";
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
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
      swiperOptions: false,
      swiperOptions: {
        // pagination: {
        //   el: ".swiper-pagination",
        // },
        autoplay: {
          disableOnInteraction: false, //用户操作后是否禁止自动循环
          delay: 2000, //自自动循环时间
        }, //可选选项，自动滑动
        speed: 1000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
        loop: true, //循环切换
        grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
        scrollbar: ".swiper-scrollbar",
        mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
        observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
          // type : 'progressbar', //分页器形状
          clickable: true, //点击分页器的指示点分页器会控制Swiper切换
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.$swiper;
  //   },
  // },
  // directives: {
  //   swiper: directive,
  // },
};
</script>

<style lang="scss" scoped>
.wh_content {
  width: 100%;
  height: 350px;
  .wh_slide {
    width: 100%;
    height: 350px;
    img {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
    }
  }
}
.swiper-container {
  width: 100%;
  height: 350px;
  .swiper-slide {
    width: 100%;
    height: 350px;
    img {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
    }
  }
}
// .swiper-button-next {
//   width: 50px;
//   height: 50px;
//   background: chartreuse;
// }
</style>
