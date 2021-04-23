<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import i18n from "@/i18n"
export default {
  mounted(){
    const login =  localStorage.getItem("login") 
    const lan =  localStorage.getItem("locale") 
    if(lan) i18n.locale = lan
    if(login){
      this.$store.dispatch("login", login)
    } 
    
  }
}

</script>
