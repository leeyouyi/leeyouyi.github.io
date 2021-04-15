<template>
    <div class="content">
        <div class="inputBox">
            <div class="input" v-for="(item,index) in data" :key="index">
                <div class="text">
                    <label :style="{
                            'justifyContent': item.end ?'center':'flex-start',
                            'marginRight': item.end ?'10px' : '0'
                    }">{{ item.text === '~' ? item.text  : $t(item.text) }}</label>
                </div>

                    <select v-if="item.select">
                       <option v-for="(el,i) in item.select" :key="i">{{ i=== 0 ? $t(el): el }}</option>
                    </select>
                    <input v-if="!item.select" :type="item.time ? 'date' : 'text'" />
                
            </div>
        </div>
        <div class="button">
            <button>{{$t('button.search')}}</button>
        </div>

        <div class="infoBox">
            <div class="info">
                <table>
                    <thead>
                        <tr>
                            <th v-for="(item,index) in infoData" :key="index" :style="{
                                'width': item.long && item.long +'px'
                            }">{{ item.text === 'USDT' ? item.text  : $t(item.text) }}}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-for="(item,index) in userData" :key="index" :style="{
                                'width': item.long && item.long +'px'
                            }">
                                {{ item.text && item.text}}

                                <img v-if="!item.text" :src="TimesCircle" alt="icon" />
                                <img v-if="!item.text" :src="CheckCircle" alt="icon" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
import TimesCircle from '@/assets/images/Icon/FA/TimesCircle.svg'
import CheckCircle from '@/assets/images/Icon/FA/CheckCircle.svg'
export default {
  name: 'Acceptance',

  data(){
    return{
        TimesCircle,
        CheckCircle,
        data : [
            {
                text: 'form.system_number'
            },
            {
                text: 'form.merchant_number'
            },
            {
                text: 'form.order_status',
                select:[
                    'form.choose','test1','test2','test3'
                ]
            },
            {
                text: 'form.username'
            },
            {
                text: 'form.time_limit',
                time:true
            },
            {
                text: '~',
                time:true,
                end:true
            },
        ],
        infoData : [
            {
                text: 'table.operating',
                long:80,
            },
            {
                text: 'table.real_name'
            },
            {
                text: 'table.cardholder'
            },
            {
                text: 'table.card_number'
            },
            {
                text: 'table.bank_name'
            },
            {
                text: 'table.branch_name'
            },
            {
                text: 'table.order_amount'
            },
            {
                text: 'table.confirm_amount'
            },
            {
                text:'USDT',
            },
            {
                text: 'table.cost'
            },
            {
                text: 'table.number_of_credits'
            },
            {
                text: 'table.system_number'
            },
            {
                text: 'table.remarks'
            },
            {
                text: 'table.username'
            },
            {
                text: 'table.creation_time',
                long:150
            },
        ],
         userData : [
            {
                // text: false,
                long:80,
            },
            {
                text:'吴巧红'
            },
            {
                text:'吴巧红'
            },
            {
                text:'15818333930'
            },
            {
                text:'邮政银行'
            },
            {
                text:'北京市怀柔区支行'
            },
            {
                text:'1000000'
            },
            {
                text:'1000000'
            },
            {
                text:'1000000'
            },
            {
                text:'1000000'
            },
            {
                text:'1000000'
            },
            {
                text:'11113749472389'
            },
            {
                text:'XXX'
            },
            {
                text:'吴巧红'
            },
            {
                text:'2020-12-04 09:55:00',
                long:150
            },
        ]
    }
  },
  methods:{
    submitHandler(){
        this.$store.dispatch("list",{
          title:'资金查询',
          src:'AmountQuery'
        })
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
                width:80%;
                display:flex;
                align-items:center;
                padding:8px 0 ;
                .text{
                    width:80px;
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
                    display:flex;
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
                    width:230px;
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
    .infoBox{
        width:100%;
        display:flex;
        justify-content:center;
        margin-top:30px;
        .info{
            width:90%;
            border-top:solid 1px #ccc;
            overflow: scroll;
            table{
                padding:15px 0;
                tr{
                    display: inline-flex;
                }
                th{
                    width: 100px ;
                    font-family: PingFangTC-Medium;
                    font-size: 12px;
                    color: #ADADAD;
                    text-align: center;
                    font-weight: 500;
                    padding-bottom:10px;
                }
                td{
                    width: 100px ;
                    font-family: PingFangTC-Medium;
                    font-size: 12px;
                    color: #ADADAD;
                    text-align: center;
                    font-weight: 500;
                    img{
                        margin: 0 10px;
                    }
                }
            }
        }
    }
</style>

