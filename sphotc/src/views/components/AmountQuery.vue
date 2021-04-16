<template>
    <div class="content">
        <div class="button">

            <button @click="coinHandeler('set')">{{$t('button.recharge')}}</button>
            <button @click="coinHandeler('get')">{{$t('button.withdraw')}}</button>
            <button @click="dispatch">{{$t('button.withdrawal')}}</button>
        </div>
        <div class="info">
            <table>
                <thead>
                    <tr>
                        <th v-for="(item,index) in infoData" :key="index">{{$t(item.text)}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td v-for="(item,index) in userData" :key="index">{{item.text}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AmountQuery',
  data(){
    return{
      infoData : [
            {
                text: 'table.username'
            },
            {
                text: 'table.quantity_balance'
            },
            {
                text: 'table.amount_balance'
            },
            {
                text: 'table.quantity_freeze'
            },
            {
                text: 'table.fund_freeze'
            }
        ],
       userData : [
          {
              text:'15818333930'
          },
          {
              text:'1,001.33'
          },
          {
              text:'0.000000'
          },
          {
              text:'0.00'
          },
          {
              text:'0.000000'
          }
      ]

    }
  },
  methods:{
    dispatch(){
        this.$store.dispatch("list",{
          title: 'coin.withdrawal',
          src:'Withdrawal'
        })
    },
    coinHandeler(type){
        const title =  type === 'set' ? 'coin.recharge': 'coin.withdraw'
        this.$store.dispatch("list",{
          title,
          src:'Coin'
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
        width:100vw;
        margin-top:60px;
        .info{
            width:100%;
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
    .button{
        width:70%;
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 20px 10px ;
        button{
            width:80px;
            height:30px;
            font-family: PingFangTC-Medium;
            font-size: 14px;
            color: #FFFFFF;
            text-align: center;
            font-weight: 500;
            background: #029688;
            border-radius: 5px;
            border:none;
            margin: 0 5px;
        }
    }

</style>

