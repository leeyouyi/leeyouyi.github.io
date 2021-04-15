<template>
   <div  class="content">
        <div class="inputBox">
            <div class="input">
                <label>{{$t('form.username')}}</label>
                <input type="text" />
            </div>
            <div class="input">
                <label>{{$t('form.actual_name')}}</label>
                <input type="text" />
            </div>
        </div>

        <div class="identityBox">

            <div class="identity" v-for="(item,index) in data" :key="index">
                <img :src="item.img" alt="img" />
                <label :for="item.id">{{$t(item.btn)}}</label>
                <form action="fileUpload" encType="multipart/form-data">
                    <input type="file" :id="item.id" accept="image/gif, image/jpeg, image/png" @change="(e)=>{
                      readURL(e.target,data,index)
                    }"/>
                </form>
            </div>

        </div>
        
    </div>

</template>

<script>
import SideA from '@/assets/images/Img/SideA.svg'
import SideAB from '@/assets/images/Img/SideAB.svg'
import SideB from '@/assets/images/Img/SideB.svg'

export default {
  name: 'Verification',
  // props:{

  // },
  data(){
    return{
        data:[
        {
            img: SideA,
            btn: 'button.upload_A',
            id:'SideA'
        },
        {
            img: SideAB,
            btn: 'button.upload_B',
            id:'SideB'
        },
        {
            img: SideB,
            btn: 'button.upload_ID',
            id:'SideAB'
        },
      ]
    }
  },
  methods:{
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
            justify-content:center;
            align-items:center;
            flex-direction:column;
            padding-bottom:10px;
            .input{
                width:90%;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                padding:15px 0;
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
                    height:40px;
                    background: #FFFFFF;
                    border: 1px solid #DDDDDD;
                    border-radius: 5px;
                    padding-left:10px;
                    color:#ADADAD;
                }
                
            }
        }
        .identityBox{
            display:flex;
            flex-direction:column;
            align-items:center;
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
                    width:100px;
                    height:40px;
                    font-family: PingFangTC-Medium;
                    font-size: 14px;
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

