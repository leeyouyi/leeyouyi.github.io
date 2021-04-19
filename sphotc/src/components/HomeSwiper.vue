<template>
  <div class="swiperBox">
    <Swiper v-if="list.length > 0">
      <Slide
        v-for="(item, index) in list"
        :key="index"
        :autoPlay="false"
        :showIndicator="true"
      >
      <div class="box">
        <img :src="item.img" />
      </div>

      </Slide>
    </Swiper>

    <!-- <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in list" :key="index">
        <img :src="item.img" />
      </swiper-slide>
      <div class="swiper-pagination"></div> 
    </swiper> -->
  <!-- <carousel >
    <slide  v-for="(item, index) in list" :key="index">
      <img :src="item.img" />
    </slide>

  </carousel> -->
        <!-- :interval="4000" -->
  </div>
</template>

<script>
import { Swiper, Slide } from "vue-swiper-component";

// import { swiper, swiperSlide  } from 'vue-awesome-swiper'
// import "swiper/dist/css/swiper.css";
// import { Carousel, Slide } from 'vue-carousel';

// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
// import 'swiper/css/swiper.css'
// import 'swiper/css/swiper.css'
// import "swiper/dist/css/swiper.css;
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    Slide
  },
    // directives: {
    //   swiper: directive
    // },
  data() {
    return {
      list: [
        { img: require("@/assets/images/Icon/Hands/Balance.png") },
        { img: require("@/assets/images/Icon/Hands/Phone.png") },
        { img: require("@/assets/images/Icon/Hands/Pinches.png") },
      ],
      swiperOptions:{
          pagination:'.swiper-pagination',
          
      }, 
    //  swiperOptions: {
    //   //  autoplay: false,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true ,
    //     type: 'bullets',
    //     bulletElement : 'li',
    //   },
    //  }
      // swiperOptions: {

      //   autoplay: false,
      //   // {
      //   //   // disableOnInteraction: false, //用户操作后是否禁止自动循环
      //   //   // delay: 2000, //自自动循环时间
      //   // }, //可选选项，自动滑动
      //   speed: 1000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
      //   loop: false, //循环切换
      //   // pagination: '.swiper-pagination',
      //   pagination: {
      //     // el: ".swiper-pagination",
      //     // // type : 'progressbar', //分页器形状
      //     // clickable: true, //点击分页器的指示点分页器会控制Swiper切换
      //     el: '.swiper-pagination',
      //     type: 'bullets',
      //     //type: 'fraction',
      //     //type : 'progressbar',
      //     //type : 'custom',
      //     // progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
      //     bulletElement : 'li', //设定分页器指示器（小点）的HTML标签。
      //     // dynamicBullets: true,  //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
      //     // dynamicMainBullets: 2, //动态分页器的主指示点的数量
      //     hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
      //     clickable: true, 
      //   },

      // },

    
    //   swiperOptions: {
    //   loop: true,
    //   autoplay: {
    //     delay: 3000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false
    //   },
    //   direction: 'vertical',
    //   // 显示分页
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true //允许分页点击跳转
    //   },
    //   // 设置点击箭头
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    //   }
    // }


    };
  },
  
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper;
  //   }
  // },
  // mounted() {
  //   console.log("this is current swiper instance object", this.swiper);
  // },


};
</script>

<style lang="scss" scoped>
.swiperBox{
  width: 100%;
  height: 360px;;
}

.wh_content {
    width: 100%;
    height: 320px;
    overflow: unset;
    margin: 0 auto;
    .wh_slide {
      width: 100%;
      .box{
        width: 280px;
        height: 320px;
        background: #FFFFFF;
        border: 1px solid #3D8DBC;
        border-radius: 20px;
        margin: 0 auto;
      }
      img {
        width: 280px;
        height: 120px;
        margin: 0 auto;
        margin-top: 40px;
      }
    }
}

.swiper-container{
    width: 300px;
    height: 320px;
    background: #FFFFFF;
    overflow: unset;
    position: relative;
    .swiper-wrapper{
      width:280px !important;
      height: 320px;
      margin: 0 20px;
      .swiper-slide{
        width:280px !important;
        background: #FFFFFF;
        border: 1px solid #3D8DBC;
        border-radius: 20px;
        margin: 0 10px;
        position: unset;
        img{
          width: 280px;
          height: 120px;
          margin: 0 auto;
          margin-top: 40px;
        }
      }

    }
}

</style>
