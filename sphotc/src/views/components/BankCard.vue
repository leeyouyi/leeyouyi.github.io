<template>
<div>
    <div class="mask" :style="{
        'display': mask ? 'flex' :'none'
    }">
        <div class="notice">
            <h2>{{$t('alert.confirm_to_deactivate')}}？</h2>
            <div class="button">
                <button @click="confirm">{{$t('alert.confirm')}}</button>
                <button @click="cancel">{{$t('alert.cancel')}}</button>
            </div>
        </div>
    </div>

        <div class="content">
            <div class="inpotBox">
                <div class="input" v-for="(item,index) in inputData" :key="index">
                    <label>{{$t(item.text)}}</label>
                    <input type="text" />
                </div>          
                <button>{{$t('button.search')}}</button>
            </div>

            <div class="infoBox">
                <div class="info">
                    <table>
                        <thead>
                            <tr>
                                <th  v-for="(item,index) in infoData" :key="index" :style="{
                                    'width': item.long && item.long +'px'
                                }">{{$t(item.text)}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
  
                                <td v-for="(item,index) in userData" :key="index" :style="{
                                    'width': item.long && item.long +'px'
                                }">
                                    {{item.text }}
                                    <img  v-if="!item.text " :src="item.img" alt="icon" @click="clickHandler(item.type)"/>
                                </td>

                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
 </div>

</template>

<script>
import TimesCircle from '@/assets/images/Icon/FA/TimesCircle.svg'
import Edit from '@/assets/images/Icon/FA/Edit.svg'

export default {
  name: 'BankCard',
  // props:{

  // },
  data(){
    return{
        mask:false,
        inputData:[
            {
                text: 'form.cardholder'
            },
            {
                text: 'form.card_number'
            },
            {
                text: 'form.identity_number'
            },
        ],
        infoData :[
            {
                text: 'table.status',
                long:40
            },
            {
                text: 'table.operating',
                long:40
            },
            {
                text:'table.username',

            },
            {
                text: 'table.cardholder'
            },
            {
                text: 'table.card_number',
                long:150
            },
            {
                text: 'table.funding_limit',

            },
            {
                text: 'table.bank_name',
            },
            {
                text: 'table.branch_name',
            },
            {
                text: 'table.identity_number',
                long:150
            },
            {
                text: 'table.cell_phone',
            },
            {
                text: 'table.creation_time',
                long:150
            },
        ],
         userData : [
            {
                long:40,
                img: TimesCircle,
                type:'status'
            },
            {
                long:40,
                img:Edit,
                type: 'edit'
            },
            {
                text:'15818333930'
            },
            {
                text:'吴巧红'
            },
            {
                text:'0000 1111 2222 3333',
                long:150
            },

            {
                text:'1000000'
            },
            {
                text:'邮政银行'
            },
            {
                text:'北京市怀柔区支行'
            },
            {
                text:'323564198001010378',
                long:150
            },
            {
                text:'12345678901'
            },
            {
                text:'2020-12-04 09:55:00',
                long:150
            },
        ]
    }
  },
  methods:{
    clickHandler(type){
        if(type === 'status'){
           this.mask = true
        }else if(type === 'edit'){
            let title = 'title.edit_bank_card'
            this.$store.dispatch("list", {
                title,
                src:'EditBankCard'
            })
        }
    },
    confirm(){
        this.cancel()
    },
    cancel(){
        this.mask = false
    }
  }
}
</script>

<style lang="scss" scoped>
.mask{
    width:100vw;
    height:100vh;
    background: rgba(0,0,0,.4);
    position:fixed;
    display:none;
    justify-content:center;
    align-items:center;
    .notice{
        width:220px;
        height:120px;
        background: #FFFFFF;
        border-radius: 10px;
        h2{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            font-family: PingFangTC-Medium;
            font-size: 16px;
            color: #ADADAD;
            text-align: center;
            font-weight: 500;
        }
        .button{
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:50%;
            button{
                width:60px;
                height:30px;
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                font-weight: 500;
                background: #029688;
                border-radius: 5px;
                border:none;
                margin: 0 15px;
            }
        }
    }
}

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
            label{
                width:80px;
                padding-left:10px;
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #ADADAD;
                font-weight: 500;
            }
            input{
                width:220px;
                height:30px;
                padding-left:10px;
                background: #FFFFFF;
                border: 1px solid #DDDDDD;
                border-radius: 5px;
            }
        }

        button{
            width:80px;
            height:40px;
            display:felx;
            align-items:center;
            justify-content:center;
            margin-top:10px;
            background: #029688;
            border-radius: 5px;
            font-family: PingFangTC-Medium;
            font-size: 14px;
            color: #FFFFFF;
            text-align: center;
            font-weight: 500;
            border:none;
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

