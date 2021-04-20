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
        <p>{{$t(item.text)}}</p>
      </div>

      </Slide>
    </Swiper>

 
  </div>
</template>

<script>
// import { Swiper, Slide } from "vue-swiper-component";
import { Swiper, Slide } from "@/components/vue-swiper-component";


export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    Slide
  },

  data() {
    return {
      list: [
        { 
          img: require("@/assets/images/Icon/Hands/Balance.png"),
          text:'home.imgText'
        },
        { 
          img: require("@/assets/images/Icon/Hands/Phone.png"),
          text:'home.imgText'
        },
        { 
          img: require("@/assets/images/Icon/Hands/Pinches.png") ,
          text:'home.imgText'
        },
      ],

    };
  },



};
</script>

<style lang="scss" scoped>
.swiperBox{
  width: 100%;
  height: 360px;;
}

.wh_content {
    width: 100%;
    height: 350px;
    margin: 0 auto;
    .wh_slide {
      width: 100%;
      .box{
        width: 90%;
        height: 320px;
        background: #FFFFFF;
        border: 1px solid #3D8DBC;
        border-radius: 20px;
        margin: 0 auto;
        position: relative;
        img {
          width: 280px;
          height: 120px;
          margin: 0 auto;
          margin-top: 40px;
          margin-bottom: 30px;
        }
        p{
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #7F7F7F;
          text-align: justify;
          line-height: 21px;
          font-weight: 400;
          padding: 0 10px;
        }
      }

    }

}


</style>
