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
    <Order v-if="src === 'Order' " />
    <CoinOrder v-if="src === 'CoinOrder' " />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Welcome from '@/views/components/Welcome.vue'
import Verification from '@/views/components/Verification.vue'
import BankCard from '@/views/components/BankCard.vue'
import AddOrEditBankCard from '@/views/components/AddOrEditBankCard.vue'
import AmountQuery from '@/views/components/AmountQuery.vue'
import Withdrawal from '@/views/components/Withdrawal.vue'
import Coin from '@/views/components/Coin.vue'
import Acceptance from '@/views/components/Acceptance.vue'
import Password from '@/views/components/Password.vue'
import FundingChanges from '@/views/components/FundingChanges.vue'
import MoneyManagement from '@/views/components/MoneyManagement.vue'
import Order from '@/views/components/Order.vue'
import CoinOrder from '@/views/components/CoinOrder.vue'

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
    MoneyManagement,
    Order,
    CoinOrder
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

