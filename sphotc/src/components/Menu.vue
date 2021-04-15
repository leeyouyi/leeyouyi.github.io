<template>
    <div class="menuBox" :style="{left:left}">
        <div class="menuWrap">
            <div class="top">
                <div class="close" @click="close">
                    <img :src=imgs.Times alt="icon" />
                </div>
            </div>
            <div class="profile">
                <div class="avatar"></div>
                <div class="info">
                    <p class="number">15818333930</p>
                    <p class="text">{{$t('menu.acceptor')}}</p>
                </div>
                <div class="sign_out">
                     <router-link to="/Sign_in">
                        <img :src=imgs.SignOutAlt alt="icon" />
                    </router-link>
                </div>
            </div>
            <div class="money">
                <span>USDT{{$t('menu.unit_price')}} : </span> 
                <span class="num">6.420000</span>
            </div>
            <div class="listBox">
 
                <div v-for="(item,index) in data" :key="index">
                    <div class="list" @click="click(index)">
                        <div>
                            <img :src="imgs.LinkSvg" alt="icon" />
                            <span>{{$t(item.text)}}</span>
                        </div>
                        <div>
                            <img :src="imgs.AngleRight" alt ="icon" :style="{
                                    'transition': '.1s',
                                    'transform': item.subMenu && item.clickShow ? 'rotate(90deg)' : 'rotate(0deg)'
                            }"/>
                        </div>
                    </div>

                     <ul  v-if="item.subMenu" :style="{
                            display: item.clickShow ? 'flex' : 'none',
                            flexDirection: index === 5 ? 'row' : 'column' 
                        }">
                        <li v-for="(li,i) in item.subMenu" :key="i">

                            <img v-if="li.text" :src="imgs.Bullseye" alt="icon" />
                            <span v-if="li.text" @click="subClick(li.text, li.src)">{{$t(li.text)}}</span>
                            <img  v-if="li.img" :src="li.img" alt="icon"  style="{paddingRight:'10px'}"  @click="changeLanguage(li.lan)"/>
                        
                        </li>
                    </ul> 

                </div>

            </div>
        
        </div>
        <div class="version">
                <span>Version 2.0</span>    
        </div>
    </div>
</template>

<script>
import Times from '@/assets/images/Icon/FA/Times.svg'
import SignOutAlt from '@/assets/images/Icon/FA/SignOutAlt.svg'
import LinkSvg from '@/assets/images/Icon/FA/Link.svg'
import AngleRight from '@/assets/images/Icon/FA/AngleRight.svg'
import Bullseye from '@/assets/images/Icon/FA/Bullseye.svg'
import i18n from "@/i18n"

export default{
  props: {
    show: Boolean,
  },
  data(){
      return{
          imgs:{
            Times,
            SignOutAlt,
            LinkSvg,
            AngleRight,
            Bullseye
          },
          data:[
               {
                    text: 'menu.order',
                    subMenu:[
                        {
                            text:'menu.acceptance_order',
                            src:'Order',
                        },
                        {
                            text:'menu.coin_order',
                            src:'CoinOrder',
                        },
                    ],
                    clickShow: false,
                },
                {
                    text:'menu.review',
                    subMenu:[
                        {
                            text:'menu.acceptance_review',
                            src:'Acceptance',
                        }
                    ],
                    clickShow: false
                },
                {
                    text:'menu.billing_information',
                    subMenu:[
                        {
                            text:'menu.fund_inquiry',
                            src:'AmountQuery',
                        },
                        {
                            text:'menu.capital_change_flow',
                            src:'FundingChanges',
                        },
                        {
                            text:'menu.user_funds_inquiry',
                            src:'MoneyManagement',
                        },
                    ],
                    clickShow:false
                },
                {
                    text:'menu.account_management',
                    subMenu:[
                        {
                            text:'menu.name_verification',
                            src:'Verification',
                        },
                        {
                            text:'menu.password_modification',
                            src:'Password',
                        },
                    ],
                    clickShow:false
                },
                {
                    text:'menu.system_management',
                    subMenu:[
                        {
                            text:'menu.bank_card_management',
                            src:'BankCard',
                        }
                    ],
                    clickShow:false
                },
                {
                    text:'menu.language',
                    subMenu:[
                        {
                            img:require('@/assets/images/Flag/China.svg'),
                            lan:'cn'
                        },
                        {
                            img:require('@/assets/images/Flag/HongKong.png'),
                            lan:'tw'
                        },
                        {
                            img:require('@/assets/images/Flag/Thailand.png'),
                            lan:'th'
                        },
                        {
                            img:require('@/assets/images/Flag/UnitedStates.svg'),
                            lan:'en'
                        },
                    ],
                    clickShow:false
                },
          ]
      }
  },
  computed:{
      left(){
          return !this.show ? '-100vw' : 0
      }
  },
  methods:{
      close(){
          this.$emit('setMenu')
      },
      click(i){
          this.data[i].clickShow = !this.data[i].clickShow

      },
      subClick(text,src){
        if(src !== ''){
            let title = this.$t(text)
            this.$store.dispatch("list", {title,src})
            this.close()
        }
      },
      changeLanguage(lan){
        i18n.locale = lan
        localStorage.setItem("locale", lan)
      }
  }
}

</script>

<style lang="scss" scoped>
    .menuBox{
        width:100vw;
        height:100vh;
        background-color:#fff;
        position:absolute;
        top:0;
        transition: 1s;
        .menuWrap{
            width:100vw;
            height:calc(100vh - 40px);
            overflow: scroll;
        }
        .top{
            padding-top: 20px;
            padding-bottom:25px;
            .close{
                padding-left:15px;
            }
        }
        .profile{
            display:flex;
            align-items:center;
            .avatar{
                width:66px;
                height:66px;
                border-radius:50%;
                background:#ccc;
                margin-left:15px;
            }
            .info{
                width:60%;
                margin-left:20px;
                .number{
                    font-family: PingFangTC-Medium;
                    font-size: 15px;
                    color: #222222;
                    font-weight: 500;
                }
                .text{
                    ont-family: PingFangTC-Regular;
                    font-size: 14px;
                    color: #222222;
                    font-weight: 500;
                }
            }
        }
        .money{
            padding:20px 0px 20px 20px;
            span{
                font-family: PingFangTC-Regular;
                font-size: 14px;
                color: #029688;
                line-height: 20px;
                font-weight: 400;
            }
            .num{
                ont-family: PingFangTC-Medium;
                font-size: 15px;
                color: #029688;
                line-height: 20px;
                font-weight: 600;
            }
        }
        .listBox{
            display:flex;
            flex-direction: column;
            padding-bottom:30px;
            .list{
                display:flex;
                justify-content:space-between;
                padding: 10px 20px;
                >div{
                    span{
                        margin-left:10px;
                        font-family: PingFangTC-Medium;
                        font-size: 14px;
                        color: #222222;
                        font-weight: 600;
                    }
                }
            }
            ul{
                width:80%;
                display:none;
                margin: 0 auto;
                flex-direction: column;
                li{
                    display:flex;
                    align-items:center;
                    padding-bottom:10px;
                    span{
                        font-family: PingFangTC-Regular;
                        font-size: 14px;
                        color: #222222;
                        font-weight: 400;
                        margin-left:5px;
                    }
                }
            }
        }

    }
    .version{
        position:absolute;
        left:20px;
        bottom:15px;
        transition: 1s;
        span{
            font-family: PingFangTC-Regular;
            font-size: 12px;
            color: #222222;
            font-weight: 500;
        }
    }
</style>
