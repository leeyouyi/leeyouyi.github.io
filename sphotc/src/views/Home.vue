<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header :title="title" :right="src"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  // data(){
  //   return{
  //     // title:'',
  //     // src:''
  //   }
  // },
  mounted(){
    console.log('home')
    console.log( this.$store.state.list)
  },
  computed:{
    title(){
      return this.$store.state.list.title
    },
    src(){
      return this.$store.state.list.src
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
    max-width: 1024px;
    margin: auto;
    display: flex;
    height:100vh;
    overflow: scroll;
}
</style>

