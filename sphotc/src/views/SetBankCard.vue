<template>
    <div class="inputBox">
        <div class="input" v-for="(item,index) in data" :key="index">
            <div class="text">
                <span v-if="!item.optional">*</span>
                <label>{{$t(item.text)}}</label>
            </div>

                <select v-if="item.select" >
                    <option v-for="(el,i) in item.select" :key="i">{{i===0 ?$t(el): el }}</option>
                </select>

            <input v-if="!item.select" type="text" />
        
        </div>

    </div>
</template>

<script>
export default {
  name: 'SetBankCard',
  props:{
      data: Array
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
 .inputBox{
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
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
</style>

