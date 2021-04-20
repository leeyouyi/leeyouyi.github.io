<template>
    <div class="home" :class="{open:menuShow}">
        <Header :title="title" :right="src" @setMenuOpen="setMenuOpen"/>
        <Menu :show="menuShow" @setMenu="setMenu"/>
        <div class="banner">
            <img :src="bitcoinbanner" alt="banner" />
        </div>

        <div class="content">
            <h2>{{$t('home.title1')}}</h2>
            <ul class="country">
                <li :class="{ active: item.click }" v-for="(item,index) in country" :key="index" @click="chooseCountry(item)" >
                    <div class="imgwarp">
                        <img :src="item.img" alt="flag">  
                    </div>
                    <span> {{item.text}}</span>
                </li>
            </ul>

            <ul class="liBox">
                <div class="top">
                    <span  v-for="(item,index) in topTitle" :key="index">{{ index===0 ? '':  index===1 ? $t(item.text) : '24h'+ $t(item.text)}}</span>
                </div>
                <li v-for="(item,index) in coinData" :key="index" @click="goBuy(item.img,item.type,item.bg)">
                    <div class="leftWrap">
                        <div class="imgwrap" :style="{
                            background: item.bg
                        }"><img :src="item.img" alt="icon"></div>
                        <span>{{item.type}}</span>
                    </div>
                    <div class="wrap">
                        <span class="price">{{item.price}}</span>
                    </div>
                    <div class="wrap">
                        <span class="upDown" :style="{
                            color:item.upDown > 0 ? '#03AD90' :  item.upDown === 0 ? '#999999' : '#D14B64'
                        }">{{ (item.upDown > 0 ? '+' :  item.upDown === 0 ? '' : '-') + item.upDownText}}</span>
                    </div>
                    <div class="wrap">
                        <span class="volume">{{item.volume}}</span>
                    </div>

                </li>
            </ul>

            <h2 class="h2title">{{$t('home.title2')}}</h2>
            <HomeSwiper />

        </div>
         <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import HomeSwiper from '@/components/HomeSwiper.vue'
import Footer from '@/components/Footer.vue'
import bitcoinbanner from '@/assets/images/Icon/bitcoinbanner.png'

export default {
    name: 'Home',
    components: {
        Header,
        HomeSwiper,
        Footer,
        Menu
    },

    data(){
        return{
            menuShow: false,
            bitcoinbanner,
            country : [
                {
                    img:require('@/assets/images/flags/M/UnitedStates.svg'),
                    text:'USD',
                    click:true
                },
                {
                    img:require('@/assets/images/flags/M/China.svg'),
                    text:'CNY',
                    click:false
                },
                {
                    img:require('@/assets/images/flags/M/Taiwan.svg'),
                    text:'TWD',
                    click:false
                },
                {
                    img:require('@/assets/images/flags/M/Thailand.svg'),
                    text:'THB',
                    click:false
                },

            ] ,
            topTitle:[
                {
                    text:''
                },
                {
                    text:'home.text1'
                },
                {
                    text:'home.text2'
                },
                {
                    text:'home.text3'
                },
            ],
            coinData:[
                {
                    img:require('@/assets/images/Icon/Cryptocurrency/BTC.svg'),
                    type:'BTC',
                    bg:'#F89F36 ',
                    price:'1.0006',
                    upDownText:'0.05%',
                    upDown: 1,
                    volume:'10006',

                },
                {
                    img:require('@/assets/images/Icon/Cryptocurrency/USDT.svg'),
                    type:'USDT',
                    bg:'#26A17B',
                    price:'58120',
                    upDownText:'0.05%',
                    upDown: 1,
                    volume:'58120'
                },
                {
                    img:require('@/assets/images/Icon/Cryptocurrency/ETH.svg'),
                    type:'ETH',
                    bg:'#6D75B6',
                    price:'6.1908',
                    upDownText:'0.05%',
                    upDown: 1,
                    volume:'20242'
                },
                {
                    img:require('@/assets/images/Icon/Cryptocurrency/EOS.svg'),
                    type:'EOS',
                    bg:'#2D2C2C',
                    price:'1.0006',
                    upDownText:'0.05%',
                    upDown: 0,
                    volume:'45'
                },
                {
                    img:require('@/assets/images/Icon/Cryptocurrency/LTC.svg'),
                    type:'LTC',
                    bg:'#355D9D',
                    price:'58120',
                    upDownText:'0.05%',
                    upDown: -1,
                    volume:'58120'
                },
                {
                    img:require('@/assets/images/Icon/Cryptocurrency/BTC.svg'),
                    type:'TXS',
                    bg:'#101319',
                    price:'1.0006',
                    upDownText:'0,05%',
                    upDown:1,
                    volume:'276'
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
        setMenu(){
            this.menuShow = false
        },
        setMenuOpen(){
            this.menuShow = true
        },
        chooseCountry(item){
            this.country.forEach(el => {
                el.click = false
            });
            item.click  = true
        },
        goBuy(img,type,bg){
            this.$router.push({ 
                name: 'Buy',
                params:{
                    img,
                    type,
                    bg
                }
            })
        }
    }

}
</script>

<style lang="scss" scoped>
.home{
    max-width: 1024px;
    margin: auto;
    display: flex;
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
        .h2title{
            padding-bottom: 15px;
        }
        .country{
            display: flex;
            padding-top:15px ;
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
            .active{
                border:solid 1px #3D8DBc;
            }
        }
        .liBox{
            padding-bottom: 30px;
            .top{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top:15px;
                span{
                    width: 25%;
                    font-family: PingFangTC-Regular;
                    font-size: 12px;
                    color: #999999;
                    text-align: center;
                    font-weight: 400;
                }
            }
            li{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top:10px;
                padding-bottom: 10px;
                border-bottom: 1px solid #d8d8d8;
                .leftWrap{
                    width: 25%;
                    display: flex;
                    align-items: center;
                    .imgwrap{
                        width: 20px;
                        height: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-left: 10px;

                    }
                    span{
                        padding-left: 10px;
                        font-family: ArialMT;
                        font-size: 16px;
                        color: #7F7F7F;
                        font-weight: 400;
                    }
                }
                .wrap{
                    width: 25%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .price{
                        font-family: ArialMT;
                        font-size: 16px;
                        color: #999999;
                        text-align: center;
                        font-weight: 400;
                    }
                    .upDown{
                        font-family: ArialMT;
                        font-size: 16px;
                        text-align: right;
                        font-weight: 400;
                    }
                    .volume{
                        font-family: ArialMT;
                        font-size: 16px;
                        color: #666666;
                        text-align: right;
                        font-weight: 400;
                    }
                }
  

            }
        }
    }
}
.open{
    height: 100vh;
}
</style>

