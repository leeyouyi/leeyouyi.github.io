<template>
    <div class="buyItem">
        <Header :title="title" :right="src"/>
        <div class="banner">
            <img :src="bitcoinbanner" alt="banner" />
        </div>

        <div class="content">

            <ul class="country">
                <li v-for="(item,index) in country" :key="index">
                    <div class="imgwarp">
                        <img :src="item.img" alt="flag">  
                    </div>
                    <span> {{item.text}}</span>
                </li>
            </ul>

            <ul class="imgBox" >
                <li v-for="(item,index) in coinImgs" :key="index">
                    <div class="imgWrap" :style="{
                        background: item.bg
                    }">
                        <img :src="item.img" alt="icon">
                    </div>

                    <p>{{item.type}}</p>
                </li>
            </ul>

            <div class="buy">
                <div class="buyTitle">
                    <span class="active">購買</span>
                    <span>出售</span>
                </div>
                <div class="choose">
                    <span>按金額購買</span>
                    <span>｜</span>
                    <span  class="active">按數量購買</span>
                </div>
                <div class="input">
                    <input type="text" placeholder="至少10000"/>
                    <span>USDT</span>
                </div>
                <div class="output">
                    <div class="imgWrap" :style="{
                        background: output.bg
                    }">
                        <img :src="output.img" alt="icon">
                    </div>
                    <div class="numbox"> 
                        <div class="num">
                            <span>0.00 USD/</span>
                            <span>USDT</span>
                        </div>
                        <p>请输入数量获取报价</p>
                    </div>
                </div>
                <div class="button">
                    <button>確認購買</button>
                </div>

            </div>


        </div>
         <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import bitcoinbanner from '@/assets/images/Icon/bitcoinbanner.png'

export default {
    name: 'Buy',
    components: {
        Header,
        Footer
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

        ] ,

        coinImgs:[
            {
                img:require('@/assets/images/Icon/Cryptocurrency/BTC.svg'),
                type:'BTC',
                bg:'#F89F36 '
            },
            {
                img:require('@/assets/images/Icon/Cryptocurrency/USDT.svg'),
                type:'USDT',
                bg:'#26A17B'
            },
            {
                img:require('@/assets/images/Icon/Cryptocurrency/ETH.svg'),
                type:'ETH',
                bg:'#6D75B6'
            },
            {
                img:require('@/assets/images/Icon/Cryptocurrency/EOS.svg'),
                type:'EOS',
                bg:'#2D2C2C'
            },
            {
                img:require('@/assets/images/Icon/Cryptocurrency/LTC.svg'),
                type:'LTC',
                bg:'#355D9D'
            },
            {
                img:require('@/assets/images/Icon/Cryptocurrency/BTC.svg'),
                type:'TXS',
                bg:'#101319'
            }
        ],
        output:{
            img:require('@/assets/images/Icon/Cryptocurrency/USDT.svg'),
            type:'USDT',
            bg:'#26A17B'
        }
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
.buyItem{
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
        }
        .imgBox{
            width: 90%;
            padding-bottom: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            li{
                width: 30px;
                height: 30px;
                margin: 0 14px;
                margin-top: 30px;
                .imgWrap{
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                }
                p{
                    margin-top: 5px;
                    font-family: ArialMT;
                    font-size: 12px;
                    color: #7F7F7F;
                    text-align: center;
                    font-weight: 400;
                }
            }


        }
        .buy{
            width: 90%;
            margin: 0 auto;
            .buyTitle{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 10px;
                span{
                font-family: PingFangTC-Regular;
                    font-size: 18px;
                    color: #8B8B8B;
                    text-align: center;
                    font-weight: 400; 
                    margin: 0 25px;
                    padding:5px;
                }
                .active{
                    color: #3D8DBC;
                    font-weight: 500;
                    border-bottom: 3px solid #3D8DBC ;
                }
            }
            .choose{
                    padding: 10px 0;
                    margin: 0 auto;
                span{
                    font-family: PingFangTC-Regular;
                    font-size: 14px;
                    color: #8B8B8B;
                    line-height: 20px;
                    font-weight: 400; 
                    padding: 0 5px;
                }
                .active{
                    color: #333333;
                    font-weight: 600;
                } 
            }
            .input{
                position: relative;
                input{
                    width: 310px;
                    height: 36px;
                    border: 1px solid #D8D8D8;
                    border-radius: 5px;
                    padding-left: 10px;
                    color:#7F7F7F  ;
                }
                span{
                    position: absolute;
                    right: 5px;
                    top:12px;
                    color: #aaa;
                }
            }
            .output{
                display: flex;
                align-items: center;
                margin-top: 30px;
                margin-bottom: 30px;
                padding-left: 5px;
                .imgWrap{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .numbox{
                    padding-left: 20px;
                    .num{
                        padding-bottom: 5px;
                        span{
                            font-family: PingFangTC-Regular;
                            font-size: 18px;
                            color: #8B8B8B;
                            font-weight: 400;
                        }
                    }
                    p{
                        font-family: PingFangTC-Regular;
                        font-size: 12px;
                        color: #CCCCCC;
                        font-weight: 400  
                    }
                }


            }
            .button{
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #029688;
                border-radius: 5px; 
                margin-bottom: 10px;
                button{
                    background: none;
                    border:none;
                    font-family: PingFangTC-Medium;
                    font-size: 14px;
                    color: #FFFFFF;
                    text-align: center;
                    font-weight: 500;
                }
            }
        }

    }
}
::placeholder {
  color: #ccc;
}
</style>
