<template>

    <div class="header">
      <div class="menu" @click="setMenuShow">
          <img src="@/assets/images/Icon/FA/Bars.svg" alt="icon" />
      </div>
      <h1>{{headerTitle === 'SPHOTC' ? headerTitle : $t(headerTitle)}}</h1>
      <div class="right" v-if=" right !== '' ">
        <img  v-if="img !== ''" :src="img" @click="clickHandler" alt="icon" />
      </div>
      
    </div>


</template>

<script>
import Plus from '@/assets/images/Icon/FA/Plus.svg'
import SyncAlt from '@/assets/images/Icon/FA/SyncAlt.svg'

export default {
  name: 'Header',
  props: {
    title: String,
    right: String,
  },
  data(){
    return{
      test: 'SPHOTC',
    }
  },
  computed:{
    headerTitle(){
       return  this.$router.currentRoute.name ==='Entrance' ? this.$store.state.list.title || 'SPHOTC' : 'SPHOTC'
    },
    img(){
      return  this.right === 'BankCard' ? Plus :  this.right === 'AmountQuery' ? SyncAlt : ''
    }
  },
  methods:{
    setMenuShow(){
      this.$emit('setMenuOpen')
    },
 
    clickHandler(){
        if(this.right === 'BankCard'){
          this.addCard('title.add_bank_card','AddBankCard')
      }
    },
    addCard(title,src){
      this.$store.dispatch("list", {title,src})
    }
  }
}
</script>

<style scoped lang="scss">
.header{
        width:100%;
        background: #3D8DBC;
        height:60px;
        display:flex;
        justify-content:center;
        align-items:center;
        position:fixed;
        left:0;
        top:0;
        h1{
            font-family: Arial-BoldMT;
            font-size:20px;
            color: #FFFFFF;
            text-align: center;
            font-weight: 700;
        }
        .menu{
            position:absolute;
            left:15px;
            top:15px;
        }
        .right{
            position:absolute;
            right:15px;
            top:15px;
        }
    }
</style>
