import React,{  useState } from 'react'
import styled from 'styled-components'
import Bars from '../assets/Icon/FA/Bars.svg'
import Plus from '../assets/Icon/FA/Plus.svg'
import SyncAlt from '../assets/Icon/FA/SyncAlt.svg'
import Menu from '../components/Menu'
import { useDispatch } from 'react-redux'
import { list } from '../action'
import { useTranslation } from 'react-i18next'

const Header = props =>{
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const title = props.title || 'SPHOTC'
    const { right } = props
    const [menuShow, setMenuShow] = useState(false)
    const img = right === 'BankCard' ? Plus :  right === 'AmountQuery' ? SyncAlt : ''

    const clickHandler = ()=>{
        if(right === 'BankCard'){
            addCard( t('title.add_bank_card'),'AddBankCard')
        }
    }
    const addCard = (text,src)=>{
        dispatch(
            list(text,src)
        )
    }
    return(
        <Style>
             <div className="header">
                 <div className="menu" onClick={()=>{
                     setMenuShow(true)
                 }}>
                     
                     <img src={Bars} alt="icon" />
                 </div>
                 <h1>{title}</h1>
  
 
                    {
                     img !== '' && 
                        <div className="right">
                            <img src={img} alt="icon" 
                            onClick={()=>{
                                clickHandler()
                            }}/>
                        </div>

                    }



                <Menu show={menuShow} setMenu={setMenuShow} />
             </div>
        </Style>
    )
}
const Style = styled.div`
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
`
export default Header