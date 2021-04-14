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
                    <p class="text">{t('menu.acceptor')}</p>
                </div>
                <div class="sign_out">
                     <router-link to="/Sign_in">
                        <img :src=imgs.SignOutAlt alt="icon" />
                    </router-link>
                </div>
            </div>
            <div class="money">
                <span>USDT{t('menu.unit_price')} : </span> 
                <span class="num">6.420000</span>
            </div>
            <div class="listBox">
            <!-- {
                data.map((item,index)=>{
                    return(
                        <div key={index}>
                            <div class="list" onClick={()=>{
                                    click(index)
                                }}>
                                <div>
                                    <img src={LinkSvg} alt="icon" />
                                    <span>{item.text}</span>
                                </div>
                                <div>
                                    <img src={AngleRight} alt ="icon" style={{
                                            transition: '.1s',
                                            transform: item.subMenu && clickShow[index] ? 'rotate(90deg)' : 'rotate(0deg)'
                                    }}/>
                                </div>
                            </div>
                            {
                                item.subMenu &&
                                <ul style={{
                                        display: clickShow[index] ? 'flex' : 'none',
                                        flexDirection: index === 5 ? 'row' : 'column' 
                                    }}>
                                    {
                                        item.subMenu.map((li,i)=>{
                                            return(
                                                <li key={i}>
                                                    {
                                                        li.text &&
                                                        <>
                                                            <img src={Bullseye} alt="icon" />
                                                            <span onClick={()=>{
                                                                subClick(li.text, li.src)
                                                            }}>{li.text}</span>
                                                            {/* <Link to={'/Verification'}></Link> */}
                                                        </>                                                   

                                                    }
                                                    {
                                                        li.img &&                                                            li.img &&
                                                        <img src={li.img} alt="icon"  style={{paddingRight:'10px'}} onClick={()=>{
                                                            changeLanguage(li.lan)
                                                        }}/>

                                                    }
                                                
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            }

                    </div>
                    )
                })
            } -->

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
            // text:t('menu.order'),
            subMenu:[
                {
                    // text:t('menu.acceptance_order'),
                    src:'Order',
                },
                {
                    // text:t('menu.coin_order'),
                    src:'CoinOrder',
                },
            ],
            show: false,
        },
        {
            // text:t('menu.review'),
            subMenu:[
                {
                    // text:t('menu.acceptance_review'),
                    src:'Acceptance',
                }
            ],
            show: false
        },
        {
            // text:t('menu.billing_information'),
            subMenu:[
                {
                    // text:t('menu.fund_inquiry'),
                    src:'AmountQuery',
                },
                {
                    // text:t('menu.capital_change_flow'),
                    src:'FundingChanges',
                },
                {
                    // text:t('menu.user_funds_inquiry'),
                    src:'MoneyManagement',
                },
            ],
            show:false
        },
        {
            // text:t('menu.account_management'),
            subMenu:[
                {
                    // text:t('menu.name_verification'),
                    src:'Verification',
                },
                {
                    // text:t('menu.password_modification'),
                    src:'Password',
                },
            ],
            show:false
        },
        {
            // text:t('menu.system_management'),
            subMenu:[
                {
                    // text:t('menu.bank_card_management'),
                    src:'BankCard',
                }
            ],
            show:false
        },
        {
            // text:t('menu.language'),
            subMenu:[
                {
                    img:require('@/assets/images/Flag/China.svg').default,
                    lan:'cn'
                },
                {
                    img:require('@/assets/images/Flag/HongKong.png').default,
                    lan:'tw'
                },
                {
                    img:require('@/assets/images/Flag/Thailand.png').default,
                    lan:'th'
                },
                {
                    img:require('@/assets/images/Flag/UnitedStates.svg').default,
                    lan:'en'
                },
            ],
            show:false
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
          this.$emit('setMenu');
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
