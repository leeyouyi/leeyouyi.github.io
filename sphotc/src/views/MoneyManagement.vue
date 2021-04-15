<template>
    <div class="content">
        <div class="inpotBox">
            <div class="input" v-for="(item,index) in inputData" :key="index">
                <div class="text">
                    <label style="{
                        justifyContent: 'flex-start'
                    }">{{$t(item.text)}}</label>
                </div>

                <select v-if="item.select">
                    <option v-for="(el,i) in item.select" :key="i">{{ index ===2 && i !== 0 ? el : $t(el) }}</option>
                </select>
                <input v-if="!item.select" :type="item.time ? 'date' : 'text'" />
                
            </div>          

            <div class="button">
                <button>{{$t('button.search')}}</button>
            </div>
        </div>

        <div class="infoBox">
            <div class="info">
                <table>
                    <thead>
                        <tr>
                            <th v-for="(item,index) in infoData" :key="index" :style="{
                                'width': item.long && item.long +'px'
                            }">{{ item.text === 'USDT' ? item.text  : $t(item.text) }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-for="(item,index) in userData" :key="index" :style="{
                                'width': item.long && item.long +'px'
                            }">{{ item.text && item.text}} </td>

                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MoneyManagement',
  data(){
    return{
         inputData :[
            {
                text: 'form.username'
            },
            {
                text: 'form.merchant_code'
            },
            {
                text: 'form.channel_type',
                select:[
                    'form.choose','test1','test2','test3'
                ]
            },
            {
                text: 'form.channel_name'
            },
            {
                text: 'form.status',
                select:[
                    'form.choose', 'form.enable','form.disable'
                ]
            }
        ],
        infoData :[
            {
                text: 'table.username',
            },
            {
                text: 'table.agent_name',
            },
            {
                text: 'table.quantity_balance',
            },
            {
                text: 'table.amount_balance'
            },
            {
                text: 'table.quantity_freeze',
            },
            {
                text: 'table.fund_freeze',
            },
            {
                text: 'table.status',
            }
        ],
        userData :[
            {
                text:'吴巧红',
            },
            {
                text:'XXXXXX'
            },
            {
                text:'1000000',
            },
            {
                text:'1000000',
            },

            {
                text:'1000000'
            },
            {
                text:'1000000'
            },
            {
                text:'XXXXX'
            }

        ]
    }
  },
  methods:{
    submitHandler(){
        this.$store.dispatch("list",{
          title:'资金查询',
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
    .inpotBox{
        display:flex;
        align-items:center;
        flex-direction:column;
        padding-top:10px;
        .input{
            width:90%;
            display:flex;
            align-items:center;
            padding:10px 0;
            .text{
                width:90px;
                display:flex;
            }
            label{
                width:80px;
                padding-left:10px;
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #ADADAD;
                font-weight: 500;
                display:flex;
            }
            input{
                width:220px;
                height:30px;
                padding-left:10px;
                background: #FFFFFF;
                border: 1px solid #DDDDDD;
                border-radius: 5px;
            }
            select{
                width:230px;
                height:35px;
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
            button{
                width:80px;
                height:40px;
                display:felx;
                align-items:center;
                justify-content:center;
                background: #029688;
                border-radius: 5px;
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                font-weight: 500;
                border:none;
                margin:0 10px;
                margin-top:20px;
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
                }
            }
        }
    }
}

</style>

