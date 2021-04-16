<template>
    <div class="content">
        <div class="inputBox">

                <div class="input" v-for="(item,index) in inputData" :key="index">
                    <div class="text">
                        <label :style="{
                            'justifyContent': item.end ?'center':'flex-start',
                            'marginRight': item.end ?'10px' : '0'
                        }">{{item.text === '~' ? item.text  : $t(item.text) }}</label>
                    </div>
                    <select v-if="item.select">
                        <option v-for="(el,i) in item.select" :key="i">{{ i=== 0 ? $t(el): el }}</option>
                    </select>
                    <input v-if="!item.select" :type="item.time ? 'date' : 'text'" />
                    
                </div>          
            <div class="button">
                <button>{{$t('button.search')}}</button>
                <button>{{$t('button.export')}}</button>
            </div>

            <div class="information">
                {{information}}
            </div>
        </div>

        <div class="infoBox">
            <div class="info">
                <table>
                    <thead>
                        <tr>
                            <th v-for="(item,index) in infoData" :key="index" :style="{
                                'width': item.long && item.long +'px'
                            }">{{ $t(item.text) }}</th>
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
  name: 'Order',
  data(){
    return{
      inputData:[
            {
                text: 'form.system_number'
            },
            {
                text:'form.merchant_number'
            },
            {
                text:'form.order_type',
                select:[
                    'form.choose','test1','test2','test3'
                ]
            },
            {
                text:'form.username'
            },
            {
                text:'form.real_name'
            },
            {
                text:'form.order_status',
                select:[
                    'form.choose','test1','test2','test3'
                ]
            },
            {
                text:'form.time_limit',
                time:true
            },
            {
                text: '~',
                time:true,
                end:true
            },
        ],
        //表格欄位名稱
        infoData:[
            {
                text:'table.system_number',
            },
            {
                text:'table.username',
            },
            {
                text:'table.user',
            },
            {
                text:'table.order_amount',
            },
            {
                text:'table.confirm_amount'
            },
            {
                text:'table.unit_price',
            },
            {
                text:'table.acceptance_price',
            },
            {
                text:'table.quantity',
            },
            {
                text:'table.cost',
            },
            {
                text:'table.number_of_credits',
            },
            {
                text:'table.order_status',
            },
            {
                text:'table.detailed_status',
            },
            {
                text:'table.real_name',
            },
            {
                text:'table.remarks',
            },
            {
                text:'table.bank_name',
            },
            {
                text:'table.cardholder',
            },
            {
                text:'table.card_number',
            },
            {
                text:'table.member_ID',
            },
            {
                text:'table.creation_time',
                long:150
            },
        ],
        //範例資料
        userData:[
            {
                text:'xxxxxxxxxxxxxxxx',
            },
            {
                text:'吴巧红',
            },
            {
                text:'XXXXXX'
            },
            {
                text:'1000000'
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
                text:'1000000'
            },
            {
                text:'XXXXXXXXXX'
            },
            {
                text:'XXXXXXXXXX'
            },
            {
                text:'XXXXXXXXXX'
            },
            {
                text:'XXXXXXXXXX'
            },
            {
                text:'XXXXXXXXXX'
            },
            {
                text:'XXXXXXXXXX'
            },
            {
                text:'XXXXXXXXXX'
            },
            {
                text:'XXXXXXXXXX'
            },
            {
                text:'XXXXXXXXXX'
            },
            {
                text:'XXXXXXXXXX'
            },
            {
                text:'2020-12-04 09:55:00',
                long:150
            }
        ],
        information : '确认金额：0.00  数量(USDT)：0.00  费用(USDT)：0.00  入账数量(USDT)：0.00'
    }
  },

}
</script>

<style lang="scss" scoped>
.content{
    width:100vw;
    margin-top:60px;
    .inputBox{
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
        .information{
            width:90%;
            padding-top:20px;
            font-family: PingFangTC-Medium;
            font-size: 14px;
            color: #ADADAD;
            font-weight: 500;
            display:flex;
        }
    }
    .infoBox{
        width:100%;
        display:flex;
        justify-content:center;
        margin-top:30px;
        padding-bottom:15px;
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

