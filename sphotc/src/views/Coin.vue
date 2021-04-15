<template>
    <div class="content">
        <div class="inputBox">
            <div class="input" v-for="(item,index) in data" :key="index">
                <div class="text">
                    <span v-if="!item.optional">*</span>
                    <label>{{item.text}}</label>
                </div>

                <select v-if="item.select">
                    <option v-for="(el,i) in item.select" :key="i">{{el}}</option>
                </select>
                <input v-if="!item.select" type="text" />
                
            </div>
        </div>
        <div class="button">
            <button @click="submitHandler">提交</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Coin',
  props:{
      title:String
  },
  data(){
    return{
        data : [
            {
                text:'协议类型',
                select:[
                    '请选择','test1','test2','test3'
                ]
            },
            {
                text: this.title === '充币' ? '充币地址' : '提币地址'
            },
            {
                text: this.title === '充币' ? '充币数量' : '提币数量'
            },
            {
                text:'备注 ',
                optional:true
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

</style>

