<template>
    <div class="content">
        <div class="top">
            <div class="input">
                <label>{{$t('form.payment_info')}}</label>
                <select>
                    <option>{{$t('form.choose')}}</option>
                </select>
            </div>
            <div class="btn">
                <button>{{$t('form.save_bank_info')}}</button>
            </div>
            
        </div>
        <div class="inputBox">

            <div class="input" v-for="(item,index) in data" :key="index">
                <div class="text">
                  <span v-if="!item.optional">*</span>
                
                <label>{{$t(item.text)}}</label>
                </div>

                <input type="text" />

            </div>

        </div>

        <div class="button">
            <button @click="submitHandler">{{$t('button.submit')}}</button>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'Withdrawal',
  data(){
    return{
     data : [
                {
                    text:'table.cardholder'
                },
                {
                    text:'table.bank_name'
                },
                {
                    text:'table.card_number'
                },
                {
                    text:'table.branch_name'
                },
                {
                    text:'table.funding_limit'
                },

                {
                    text:'form.account_province',
                    optional:true  
                },
                {
                    text:'form.account_city',
                    optional:true
                },
                {
                    text:'table.cell_phone',
                    optional:true
                },
                {
                    text:'table.identity_number',
                    optional:true
                }
        ]
    }
  },
  methods:{
    submitHandler(){
        this.$store.dispatch("list",{
          title:'menu.fund_inquiry',
          src:'AmountQuery'
        })
    },

  }
}
</script>

<style lang="scss" scoped>
.content{
    width:100vw;
    margin-top:60px;
    .top{
        width:100%;
        display:flex;
        align-items:center;
        flex-direction:column;
        padding:10px 0 ;
        .btn{
            width:80%;
            display:flex;
            justify-content:flex-start;
            button{
                width:110px;
                height:40px;
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                font-weight: 500;
                background: #029688;
                border-radius: 5px;
                border:none;
                margin: 10px 0;
            }
        }

    }
    .inputBox{
        width:100%;
        display:flex;
        align-items:center;
        flex-direction:column;
        padding-top:10px;
        border-top:solid 1px #ccc;
    }
    .input{
        width:80%;
        display:flex;
        align-items:center;
        padding:8px 0 ;
        .text{
            width:90px;
            display:flex;
        }
        span{
            display:flex;
            align-items:center;
            font-family: PingFangTC-Medium;
            font-size: 18px;
            color: #FF0000;
            line-height: 20px;
            font-weight: 600; 
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
        select{
            width:220px;
            height:40px;
            padding-left:10px;
            background: #FFFFFF;
            border: 1px solid #DDDDDD;
            border-radius: 5px;
            color: #ADADAD;
            option{
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #ADADAD;
                line-height: 20px;
                font-weight: 500;
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
            ont-family: PingFangTC-Medium;
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

