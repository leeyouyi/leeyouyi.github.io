<template>
    <div class="sign_in">
        <h1>
            SPHOTC
        </h1>
        <div class="box">

            <h3>{{$t('sign_in.sign_in')}}</h3>
            <div class="input">
                <input type="text" :placeholder="$t('sign_in.username')"/>
                <img class="img" :src="Envelope" alt="icon"/>
            </div>
            <div class="input">
                <input type="password" :placeholder="$t('sign_in.password')"/>
                <img class="img" :src="Lock" alt="icon"/>
            </div>
            <div class="input">
                <input type="number" :placeholder="$t('sign_in.code')"/>
                <img class="img" :src="Lock" alt="icon"/>
            </div>
            <div class="button" @click="Sign_in">
                <span>{{$t('sign_in.sign_in')}}</span>
            </div>
            <div class="bottom">
                <div class="wrap">
                    <div class="language" @click="setShow">{{$t('sign_in.language')}} 
                        <img class="caretDown" :src="CaretDown" alt="icon"/>
                        <div class="lanBox" :style="{
                            'display': show ? 'flex': 'none'
                        }">

                        <img v-for="(item,index) in lanMenu" :key="index" :src="item.img" alt="icon" @click="changeLanguage(item.lan)"/>

                        </div>
                    </div>
                    <div class="registered">
                        <router-link to="/Registered">{{$t('registered.registered')}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Envelope from '@/assets/images/Icon/FA/Envelope.svg'
import Lock from '@/assets/images/Icon/FA/Lock.svg'
import CaretDown from '@/assets/images/Icon/FA/CaretDown.svg'
import i18n from "@/i18n"
export default {
  name: 'Sign_in',
  data(){
      return{
            show:false,
            Envelope,
            Lock,
            CaretDown,
            lanMenu : [
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
            ] 
      }
  },
  methods:{
        setShow(){
            this.show = !this.show
        },
        changeLanguage(lan){
            i18n.locale = lan
            localStorage.setItem("locale", lan)
        },
        Sign_in(){
            this.$router.push({name: 'Entrance'})
        }
    }

}
</script>

<style lang="scss" scoped>
.sign_in{
    max-width: 1024px;
    height:100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: #D2D6DE;
    h1{
        font-size:40px;
        color:#fff;
        text-shadow:0 3px 5px rgba(0,0,0,.3);
        font-weight:700;
        font-family: Arial-BoldMT;
        padding:40px 0;
    }
    .box{
        width:90%;
        height:46.5%;
        background-color:#fff;
        border-radius:10px;
        h3{
            font-family: PingFangTC-Semibold;
            font-size: 20px;
            color: #999999;
            font-weight: 600;
            text-align:center;
            padding:15px 0;
        }
        .input{
            display:flex;
            justify-content:center;
            width:100%;
            height:40px;
            margin-bottom:15px;
            position: relative;
            input{
                width:90%;
                background: #FFFFFF;
                border: 1px solid #DDDDDD;
                border-radius: 5px;
                padding-left:10px;
                font-size:14px;
                text-overflow: ellipsis; 
            }
            .img{
                width:26px;
                height:26px;
                position: absolute;
                right:5%;
                top:5px;
            }
        }
        .button{
            display:flex;
            justify-content:center;
            width:100%;
            a{
                display:flex;
                justify-content:center;
                align-items:center;
                width:calc(90% + 10px);
                height:40px;
                background-color:#03C0EF;
                border-radius: 5px;
                border:none;
                color:#fff;
                font-size:14px;
            }
            span{
                display:flex;
                justify-content:center;
                align-items:center;
                width:calc(90% + 10px);
                height:40px;
                background-color:#03C0EF;
                border-radius: 5px;
                border:none;
                color:#fff;
                font-size:14px;
            }
        }
        .bottom{
            width:100%;
            display:flex;
            justify-content:center;
            .wrap{
                width:calc(90% + 10px);
                display:flex;
                justify-content:space-between;
                padding:15px 0;
                >div{
                    font-family: PingFangTC-Medium;
                    font-size: 12px;
                    color: #3D8DBC;
                    font-weight: 500;
                    display:flex;
                    align-items:center;
                    a{
                        font-family: PingFangTC-Medium;
                        font-size: 12px;
                        color: #3D8DBC;
                        font-weight: 500;
                        display:flex;
                        align-items:center;
                    }
                }
                .language{
                    position: relative;
                    .lanBox{
                        position:absolute;
                        display:none;
                        left:60px;
                    }
                }
            }

        }

    }
}
</style>

