<template>
    <div class="Registered">
        <h1>
            SPHOTC
        </h1>
        <div class="box">
            <h3>{{$t('registered.registered')}}</h3>
            <div class="input">
                <h6><span>*</span>{{$t('registered.username')}}</h6>
                <input type="text" :placeholder="$t('registered.enter')"/>
            </div>
            <div class="input">
                <h6>{{$t('registered.real_name')}}</h6>
                <input type="text"/>
            </div>
            <div class="input">
                <h6><span>*</span>{{$t('registered.password')}}</h6>
                <input type="password" :placeholder="$t('registered.length')"/>
            </div>
            <div class="input">
                <h6><span>*</span>{{$t('registered.password2')}}</h6>
                <input type="password" :placeholder="$t('registered.length')"/>
            </div>
            <div class="input">
                <h6><span>*</span>email</h6>
                <input type="text"/>
            </div>
            <div class="bottom">
                <div class="wrap">
                    <router-link to="/Home">{{$t('button.submit')}}</router-link>
                    <router-link to="/">{{$t('button.return')}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Registered'
}
</script>

<style lang="scss" scoped>

.Registered{
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
        height:60%;
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
            h6{
                width:22%;
                display:flex;
                justify-content: flex-start;
                align-items:center;
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #ADADAD;
                line-height: 20px;
                font-weight: 500;
                span{
                    font-family: PingFangTC-Medium;
                    font-size: 20px;
                    color: #FF0000;
                    line-height: 20px;
                    font-weight: 500;
                    padding-right:2px;
                    position: relative;
                    top: 2px;
                }
            }
            input{
                width:68%;
                background: #FFFFFF;
                border: 1px solid #DDDDDD;
                border-radius: 5px;
                padding-left:10px;
                font-size:12px;
            }
        }
        .bottom{
            width:100%;
            display:flex;
            justify-content:center;
            .wrap{
                width:70%;
                display:flex;
                justify-content: space-around;
                align-items:center;
                button{
                    width:80px;
                    height:40px;
                    font-family: PingFangTC-Medium;
                    font-size: 14px;
                    color: #FFFFFF;
                    text-align: center;
                    font-weight: 500;
                    background:#029688;
                    border-radius: 5px;
                    border:none;
                }
                a{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    width:80px;
                    height:40px;
                    font-family: PingFangTC-Medium;
                    font-size: 14px;
                    color: #FFFFFF;
                    text-align: center;
                    font-weight: 500;
                    background:#029688;
                    border-radius: 5px;
                    border:none;
                }
            }

        }

    }
}

</style>

