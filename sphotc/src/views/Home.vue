<template>
  <div class="home">
    <Header :title="title" :right="src"/>
    <Welcome v-if="title === '' "/>
    <Verification v-if="src === 'Verification' "/>
    <BankCard v-if="src === 'BankCard' "/>
    <AddOrEditBankCard v-if="src === 'AddBankCard'|| src === 'EditBankCard'" :src="src"/>
    <AmountQuery v-if="src === 'AmountQuery' "/>
    <Withdrawal v-if="src === 'Withdrawal' "/>
    <Coin v-if="src === 'Coin' " :title="title"/>
    <Acceptance v-if="src === 'Acceptance' " />
    <Password v-if="src === 'Password' " />
    <FundingChanges v-if="src === 'FundingChanges' " />
    <MoneyManagement v-if="src === 'MoneyManagement' " />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Welcome from '@/views/Welcome.vue'
import Verification from '@/views/Verification.vue'
import BankCard from '@/views/BankCard.vue'
import AddOrEditBankCard from '@/views/AddOrEditBankCard.vue'
import AmountQuery from '@/views/AmountQuery.vue'
import Withdrawal from '@/views/Withdrawal.vue'
import Coin from '@/views/Coin.vue'
import Acceptance from '@/views/Acceptance.vue'
import Password from '@/views/Password.vue'
import FundingChanges from '@/views/FundingChanges.vue'
import MoneyManagement from '@/views/MoneyManagement.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Welcome,
    Verification,
    BankCard,
    AddOrEditBankCard,
    AmountQuery,
    Withdrawal,
    Coin,
    Acceptance,
    Password,
    FundingChanges,
    MoneyManagement
  },
  // data(){
  //   return{
  //     // title:'',
  //     // src:''
  //   }
  // },
  mounted(){
    // console.log('home')
    // console.log( this.$store.state.list)
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

