<template>
    <div class="home">
        <Header :title="title" :right="src"/>
        <div class="banner">
            <img :src="bitcoinbanner" alt="banner" />
        </div>

        <div class="content">
            <h2>即時報價</h2>
            <ul class="country">
                <li v-for="(item,index) in country" :key="index">
                    <div class="imgwarp">
                        <img :src="item.img" alt="flag">  
                    </div>
                    <span> {{item.text}}</span>
                </li>
            </ul>

            <ul class="liBox">
                <li class="top">
                    <span></span>
                    <span>最新價格</span>
                    <span>24h漲跌</span>
                    <span>24h成交量</span>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import bitcoinbanner from '@/assets/images/Icon/bitcoinbanner.png'

export default {
    name: 'Home',
    components: {
        Header,
    },

  data(){
      return{
        bitcoinbanner,
        country : [
            {
                img:require('@/assets/images/flags/M/UnitedStates.svg'),
                text:'USD'
            },
            {
                img:require('@/assets/images/flags/M/China.svg'),
                text:'CNY'
            },
            {
                img:require('@/assets/images/flags/M/Taiwan.svg'),
                text:'TWD'
            },
            {
                img:require('@/assets/images/flags/M/Thailand.svg'),
                text:'THB'
            },

        ] 
      }
  },
    computed:{
        title(){
        return this.$store.state.list.title
        },
        src(){
        return this.$store.state.list.src
        }
    },
  methods:{
  }

}
</script>

<style lang="scss" scoped>
.home{
    max-width: 1024px;
    margin: auto;
    display: flex;
    height:100vh;
    overflow: scroll;
    flex-direction: column;
    .banner{
        width: 100%;
        margin-top:60px;
        img{
            width: 100%;
            height: 124px;
        }
    }
    .content{
        display: flex;
        justify-content: center;
         flex-direction: column;
        padding: 10px;
        h2{
            font-family: PingFangTC-Medium;
            font-size: 18px;
            color: #333333;
            text-align: center;
            font-weight: 700;
        }
        .country{
            display: flex;
            padding-top:10px ;
            li{
                width: 68px;
                height: 25px;
                border:rgba(49,49,49,.2)  1px solid;
                margin: 0 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                .imgwarp{
                    width: 20px;
                    height: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 16px;
                        height: 16px;
                        border-radius: 50%;
                    }
                }
                span{
                    font-family: ArialMT;
                    font-size: 12px;
                    color: #7F7F7F;
                    font-weight: 400;
                    margin: 0 5px;
                }
            }
        }
        .liBox{
            .top{
                display: flex;
                span{
                    margin: 0 10px;
                    font-family: PingFangTC-Regular;
                    font-size: 12px;
                    color: #999999;
                    text-align: center;
                    font-weight: 400;
                }
            }
        }
    }
}
</style>

