<template>

    <div class="header">
      <div class="menu" @click="setMenuShow">
          <img src="@/assets/images/Icon/FA/Bars.svg" alt="icon" />
      </div>
      <h1>{{headerTitle}}</h1>
      <div class="right" v-if=" right !== '' ">
        <img :src="img" alt="icon" />
      </div>
      <Menu :show="menuShow" @setMenu="setMenu"/>
    </div>


</template>

<script>
import Menu from '@/components/Menu.vue'
import Plus from '@/assets/images/Icon/FA/Plus.svg'
import SyncAlt from '@/assets/images/Icon/FA/SyncAlt.svg'


export default {
  name: 'Header',
  components: {
    Menu
  },
  props: {
    title: String,
    right: String,
  },
  data(){
    return{
      test: 'SPHOTC',
      menuShow: false
      // img:require('@/assets/images/Icon/FA/Bars.svg')
    }
  },
  created(){
   
  },
  mounted(){
  // console.log('this.right')

  },
  computed:{
    headerTitle(){
       return this.title || 'SPHOTC'
    },
    img(){
      return  this.right === 'BankCard' ? Plus :  this.right === 'AmountQuery' ? SyncAlt : ''
    }
  },
  methods:{
    setMenuShow(){
      this.menuShow = true
    },
    setMenu(){
      this.menuShow = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
