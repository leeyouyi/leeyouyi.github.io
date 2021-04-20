<template>
  <div class="footer">
    <div class="imgbox">
      <img   v-for="(item,index) in imgs" :key="index" :src="item.img" alt="icon">
    </div>
    <div class="copyright">
      © 2020-2021 SPHOTC
    </div>
  </div>
</template>

<script>


export default {
  name: "Footer",


  data() {
    return {
      imgs: [
        { 
          img: require("@/assets/images/Icon/Footer/Facebook.svg"),
        },
        { 
          img: require("@/assets/images/Icon/Footer/Twitter.svg"),
        },
        { 
          img: require("@/assets/images/Icon/Footer/Youtube.svg") ,
        },
        { 
          img: require("@/assets/images/Icon/Footer/IG.svg") ,
        },
        { 
          img: require("@/assets/images/Icon/Footer/QQ.svg") ,
        },
        { 
          img: require("@/assets/images/Icon/Footer/WeChat.svg") ,
        },
        { 
          img: require("@/assets/images/Icon/Footer/Weibo.svg") ,
        },
      ],

    };
  },
  

};
</script>

<style lang="scss" scoped>
.footer{
  width: 100%;
  height: 102px;
  background: #D2D6DE;
  box-shadow: inset 0 2px 5px 0 rgba(0,0,0,0.30);
  .imgbox{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
    img{
      margin: 0 8px;
    }
  }
  .copyright{
    font-family: ArialMT;
    font-size: 12px;
    color: #7F7F7F;
    text-align: center;
    font-weight: 400;
  }
}

</style>
