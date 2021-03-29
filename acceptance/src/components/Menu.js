import React,{ useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Times from '../static/Icon/FA/Times.svg'
import SignOutAlt from '../static/Icon/FA/SignOutAlt.svg'
import LinkSvg from '../static/Icon/FA/Link.svg'
import AngleRight from '../static/Icon/FA/AngleRight.svg'
import Bullseye from '../static/Icon/FA/Bullseye.svg'
import { useDispatch } from 'react-redux'
import { list } from '../action'
import { useTranslation } from 'react-i18next'

const Menu = props =>{
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const {show,setMenu} = props
    const left = !show ? '-100vw' : 0
    const clickShow = []
    const setClickShow = []
    const data = [
        {
            text:t('menu.order'),
            subMenu:[
                {
                    text:t('menu.acceptance_order'),
                    src:'Order',
                },
                {
                    text:t('menu.coin_order'),
                    src:'CoinOrder',
                },
            ],
            show: [clickShow[0] ,setClickShow[0]] = useState(false),
        },
        {
            text:t('menu.review'),
            subMenu:[
                {
                    text:t('menu.acceptance_review'),
                    src:'Acceptance',
                }
            ],
            show:[clickShow[1] ,setClickShow[1]] = useState(false)
        },
        {
            text:t('menu.billing_information'),
            subMenu:[
                {
                    text:t('menu.fund_inquiry'),
                    src:'AmountQuery',
                },
                {
                    text:t('menu.capital_change_flow'),
                    src:'FundingChanges',
                },
                {
                    text:t('menu.user_funds_inquiry'),
                    src:'MoneyManagement',
                },
            ],
            show:[clickShow[2] ,setClickShow[2]] = useState(false)
        },
        {
            text:t('menu.account_management'),
            subMenu:[
                {
                    text:t('menu.name_verification'),
                    src:'Verification',
                },
                {
                    text:t('menu.password_modification'),
                    src:'Password',
                },
            ],
            show:[clickShow[3] ,setClickShow[3]] = useState(false)
        },
        {
            text:t('menu.system_management'),
            subMenu:[
                {
                    text:t('menu.bank_card_management'),
                    src:'BankCard',
                }
            ],
            show:[clickShow[4] ,setClickShow[4]] = useState(false)
        },
        {
            text:t('menu.language'),
            subMenu:[
                {
                    img:require('../static/Flag/China.svg').default,
                    lan:'cn'
                },
                {
                    img:require('../static/Flag/HongKong.png').default,
                    lan:'tw'
                },
                {
                    img:require('../static/Flag/Thailand.png').default,
                    lan:'th'
                },
                {
                    img:require('../static/Flag/UnitedStates.svg').default,
                    lan:'en'
                },
            ],
            show:[clickShow[5] ,setClickShow[5]] = useState(false)
        },
    ]
    const close =()=>{
        setMenu(false)
        for (let i = 0; i < data.length; i++) {
            if(clickShow[i]===true){
                setClickShow[i](false)
            }
            
        }
    }
    const click = (index)=>{

        if(clickShow[index]){
            setClickShow[index](false)
        }else{
            setClickShow[index](true)
        }
             
    }
    const subClick =(text,src)=>{

        if(src !== ''){
            dispatch(
                list(text,src)
            )
            close()
        }
    }
    const changeLanguage = (lan) => {
        // console.log(lan)
        i18n.changeLanguage(lan)
        localStorage.setItem("locale", lan)
    }
    return(
        <Style >
            <div className="menuBox" style={{left:left}}>
                <div className="menuWrap">
                    <div className="top">
                        <div className="close" onClick={close}>
                            <img src={Times} alt="icon" />
                        </div>
                    </div>
                    <div className="profile">
                        <div className="avatar"></div>
                        <div className="info">
                            <p className="number">15818333930</p>
                            <p className="text">{t('menu.acceptor')}</p>
                        </div>
                        <div className="sign_out">
                            <Link to={'/Sign_in'}>
                                <img src={SignOutAlt} alt="icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="money">
                        <span>USDT{t('menu.unit_price')} : </span> 
                        <span className="num">6.420000</span>
                    </div>
                    <div className="listBox">
                    {
                        data.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <div className="list" onClick={()=>{
                                            click(index)
                                        }}>
                                        <div>
                                            <img src={LinkSvg} alt="icon" />
                                            <span>{item.text}</span>
                                        </div>
                                        <div>
                                            <img src={AngleRight} alt ="icon" style={{
                                                    transition: '.1s',
                                                    transform: item.subMenu && clickShow[index] ? 'rotate(90deg)' : 'rotate(0deg)'
                                            }}/>
                                        </div>
                                    </div>
                                    {
                                        item.subMenu &&
                                        <ul style={{
                                                display: clickShow[index] ? 'flex' : 'none',
                                                flexDirection: index === 5 ? 'row' : 'column' 
                                            }}>
                                            {
                                                item.subMenu.map((li,i)=>{
                                                    return(
                                                        <li key={i}>
                                                            {
                                                                li.text &&
                                                                <>
                                                                    <img src={Bullseye} alt="icon" />
                                                                    <span onClick={()=>{
                                                                        subClick(li.text, li.src)
                                                                    }}>{li.text}</span>
                                                                    {/* <Link to={'/Verification'}></Link> */}
                                                                </>                                                   

                                                            }
                                                            {
                                                                li.img &&                                                            li.img &&
                                                                <img src={li.img} alt="icon"  style={{paddingRight:'10px'}} onClick={()=>{
                                                                    changeLanguage(li.lan)
                                                                }}/>

                                                            }
                                                        
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    }
    
                            </div>
                            )
                        })
                    }

                    </div>
                
                </div>
                <div className="version">
                        <span>Version 2.0</span>    
                </div>
            </div>


            

        </Style>

    )
}

const Style = styled.div`
    .menuBox{
        width:100vw;
        height:100vh;
        background-color:#fff;
        position:absolute;
        top:0;
        transition: 1s;
        .menuWrap{
            width:100vw;
            height:calc(100vh - 40px);
            overflow: scroll;
        }
        .top{
            padding-top: 20px;
            padding-bottom:25px;
            .close{
                padding-left:15px;
            }
        }
        .profile{
            display:flex;
            align-items:center;
            .avatar{
                width:66px;
                height:66px;
                border-radius:50%;
                background:#ccc;
                margin-left:15px;
            }
            .info{
                width:60%;
                margin-left:20px;
                .number{
                    font-family: PingFangTC-Medium;
                    font-size: 15px;
                    color: #222222;
                    font-weight: 500;
                }
                .text{
                    ont-family: PingFangTC-Regular;
                    font-size: 14px;
                    color: #222222;
                    font-weight: 500;
                }
            }
        }
        .money{
            padding:20px 0px 20px 20px;
            span{
                font-family: PingFangTC-Regular;
                font-size: 14px;
                color: #029688;
                line-height: 20px;
                font-weight: 400;
            }
            .num{
                ont-family: PingFangTC-Medium;
                font-size: 15px;
                color: #029688;
                line-height: 20px;
                font-weight: 600;
            }
        }
        .listBox{
            display:flex;
            flex-direction: column;
            padding-bottom:30px;
            .list{
                display:flex;
                justify-content:space-between;
                padding: 10px 20px;
                >div{
                    span{
                        margin-left:10px;
                        font-family: PingFangTC-Medium;
                        font-size: 14px;
                        color: #222222;
                        font-weight: 600;
                    }
                }
            }
            ul{
                width:80%;
                display:none;
                margin: 0 auto;
                flex-direction: column;
                li{
                    display:flex;
                    align-items:center;
                    padding-bottom:10px;
                    span{
                        font-family: PingFangTC-Regular;
                        font-size: 14px;
                        color: #222222;
                        font-weight: 400;
                        margin-left:5px;
                    }
                }
            }
        }

    }
    .version{
        position:absolute;
        left:20px;
        bottom:15px;
        transition: 1s;
        span{
            font-family: PingFangTC-Regular;
            font-size: 12px;
            color: #222222;
            font-weight: 500;
        }
    }
`
export default Menu