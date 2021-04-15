<template>
    <div class="content">

        <SetBankCard  :data="src ==='AddBankCard'? addData : editData" :src="src"/>

        <div v-if="src==='AddBankCard'" class="identityBox">
            <div v-for="(item,index) in uploadData" class="identity" :key="index">
                <img :src="item.img" alt="img" />
                <label :for="item.id">{{$t(item.btn)}}</label>
                <form action="fileUpload" encType="multipart/form-data">
                    <input type="file" :id="item.id" accept="image/gif, image/jpeg, image/png" @change="(e)=>{
                      readURL(e.target,uploadData,index)
                    }"/>
                </form>
            </div>
        </div>
        
        <div class="button">

            <button v-if=" src === 'AddBankCard' " @click="addHandler">{{$t('button.add')}}</button>
            <button v-if=" src === 'AddBankCard' " @click="submitHandler">{{$t('button.return')}}</button>
            
            <button v-if=" src !== 'AddBankCard' " @click="submitHandler">{{$t('button.submit')}}</button>
        

        </div>
    </div>

</template>

<script>

import ASide from '@/assets/images/Img/ASide.svg'
import BSide from '@/assets/images/Img/BSide.svg'
import SetBankCard from '@/views/SetBankCard.vue'
export default {
  name: 'AddOrEditBankCard',
  components:{
      SetBankCard
  },
  props:{
      src : String
  },
  data(){
    return{
      addData : [
            {
                text: 'form.cardholder'
            },
            {
                text: 'form.bank_code',
                select:[
                'form.choose','test1','test2','test3'
                ]
            },
            {
                text: 'form.bank_name'
            },
            {
                text: 'form.card_number'
            },
            {
                text: 'form.branch_name'
            },
            {
                text: 'form.funding_limit'
            },
            {
                text: 'form.account_province',
                optional:true  
            },
            {
                text: 'form.account_city',
                optional:true
            },
            {
                text: 'form.cell_phone',
                optional:true
            },
            {
                text: 'form.identity_number',
                optional:true
            }
        ],
        editData : [
            {
                text: 'form.cardholder'
            },
            {
                text: 'form.bank_name'
            },
            {
                text: 'form.card_number'
            },
            {
                text: 'form.branch_name'
            },
            {
                text: 'form.funding_limit'
            },
            {
                text: 'form.upper_limit'
            },
            {
                text: 'form.lower_limit'
            },
            {
                text: 'form.account_province',
                optional:true  
            },
            {
                text: 'form.account_city',
                optional:true
            },
            {
                text: 'form.cell_phone',
                optional:true
            },
            {
                text: 'form.identity_number',
                optional:true
            }
        ],
        uploadData : [
            {
                img: ASide,
                btn: 'button.upload_A',
                id:'ASide'
            },
            {
                img: BSide,
                btn:'button.upload_B',
                id:'BSide'
            }
        ]
    }
  },
  methods:{
    addHandler(){
     this.submitHandler()
    },
    submitHandler(){
        this.$store.dispatch("list",{
            title:'银行卡管理',
            src:'BankCard'
        })
    },
    readURL:(input,data,i)=>{
        if(input.files && input.files[0]){
          let reader = new FileReader();
          reader.onload =  e => {
            data[i].img = e.target.result
          }
          reader.readAsDataURL(input.files[0]);
        }
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
    .identityBox{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-bottom:15px;
        .identity{
            display:flex;
            align-items:center;
            flex-direction:column;
            padding:15px 0;
            img{
                margin-bottom:25px;
            }
            label{
                display:flex;
                align-items:center;
                justify-content:center;
                width:85px;
                height:30px;
                font-family: PingFangTC-Medium;
                font-size: 12px;
                text-align: center;
                font-weight: 500;
                color:#fff;
                background: #029688;
                border-radius: 5px;
            }
            input{
                opacity:.1;
                display:none;
            }
        }
    }
}  
</style>

