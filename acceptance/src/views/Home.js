// import React,{ useEffect, useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import { useSelector} from 'react-redux'
import Welcome from './components/Welcome'
import Verification from './components/Verification'
import BankCard from './components/BankCard'
import AddOrEditBankCard from './components/AddOrEditBankCard'
import AmountQuery from './components/AmountQuery'
import Withdrawal from './components/Withdrawal'
import Coin from './components/Coin'
import Acceptance from './components/Acceptance'
import Password from './components/Password'
import FundingChanges from './components/FundingChanges'
import MoneyManagement from './components/MoneyManagement'
import Order from './components/Order'
import CoinOrder from './components/CoinOrder'


const Home =()=>{
    const { title, src }= useSelector(state => state.listReducer)

    return (
        <Style>
              <div className="home">
                <Header title={title} right={src}/>
                {
                    title === '' &&  <Welcome />
                }
                {
                    src === 'Verification'  &&  <Verification />
                }
                {
                    src === 'BankCard'  &&  <BankCard />
                }
                {
                    (src === 'AddBankCard' || src === 'EditBankCard') && <AddOrEditBankCard  src={src}/>
                }
                {
                     src === 'AmountQuery'  &&  <AmountQuery />
                }
                {
                    src ===  'Withdrawal' &&  <Withdrawal />
                }
                {
                    src ===  'Coin' &&  <Coin title={title}/>
                }
                {
                    src ===  'Acceptance' &&  <Acceptance />
                }
                {
                    src ===  'Password' &&  <Password />
                }
                {
                    src ===  'FundingChanges' &&  <FundingChanges />
                }
                {
                    src ===  'MoneyManagement' &&  <MoneyManagement />
                }
                {
                    src ===  'Order' &&  <Order />
                }
                {
                    src ===  'CoinOrder' &&  <CoinOrder />
                }
            </div>
        </Style>

    )
}
const Style = styled.div`
.home{
    max-width: 1024px;
    margin: auto;
    display: flex;
    height:100vh;
    overflow: scroll;
}

`
export default Home