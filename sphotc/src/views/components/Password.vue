<template>
    <div class="content">
        <div class="inputBox">
            <div class="input"  v-for="(item,index) in data" :key="index">
                <div class="text">
                    <label>{{$t(item.text)}}</label>
                </div>
                    <input type="text" />
            </div>
        </div>
        <div class="button">
            <button>{{$t('button.submit')}}</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Password',
  data(){
    return{
        data :[
            {
                text: 'form.current_password'
            },
            {
                text: 'form.new_password'
            },
            {
                text: 'form.confirm_password'
            }
        ]
    }
  }

  
}
</script>

<style lang="scss" scoped>
    .content{
        width:100vw;
        margin-top:60px;
        .inputBox{
            width:100%;
            display:flex;
            align-items:center;
            flex-direction:column;
            padding-top:20px;
            .input{
                width:90%;
                display:flex;
                align-items:center;
                padding:8px 0 ;
                .text{
                    width:100px;
                    display:flex;
                }
                label{
                    width:90px;
                    padding-left:5px;
                    font-family: PingFangTC-Medium;
                    font-size: 14px;
                    color: #ADADAD;
                    line-height: 20px;
                    font-weight: 500;
                }
                input{
                    width:220px;
                    height:35px;
                    padding-left:10px;
                    background: #FFFFFF;
                    border: 1px solid #DDDDDD;
                    border-radius: 5px;
                }
            }
        }
        .button{
            display:flex;
            justify-content:center;
            align-items:center;
            padding: 20px 0 ;
            button{
                width:80px;
                height:40px;
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                font-weight: 500;
                background: #029688;
                border-radius: 5px;
                border:none;
                margin: 0 20px;
            }
        }
    }

</style>

