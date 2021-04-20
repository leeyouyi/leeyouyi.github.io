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
        <p>{{item.text}}</p>
      </div>

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
    Slide
  },

  data() {
    return {
      list: [
        { 
          img: require("@/assets/images/Icon/Hands/Balance.png"),
          text:'MGP使用的是第三代稳定币系统，其开发的BITEX基于公链底层，所以可以直接用USDT付转账手续费，降低用户学习成本，并且性能强大，转账3秒到账。并由4大机制保证其价值稳定。'
        },
        { 
          img: require("@/assets/images/Icon/Hands/Phone.png"),
          text:'MGP使用的是第三代稳定币系统，其开发的BITEX基于公链底层，所以可以直接用USDT付转账手续费，降低用户学习成本，并且性能强大，转账3秒到账。并由4大机制保证其价值稳定。'
        },
        { 
          img: require("@/assets/images/Icon/Hands/Pinches.png") ,
          text:'MGP使用的是第三代稳定币系统，其开发的BITEX基于公链底层，所以可以直接用USDT付转账手续费，降低用户学习成本，并且性能强大，转账3秒到账。并由4大机制保证其价值稳定。'
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
    height: 320px;
    overflow: unset;
    margin: 0 auto;
    .wh_slide {
      width: 100%;
      .box{
        width: 90%;
        height: 310px;
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
          margin-bottom: 50px;
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
