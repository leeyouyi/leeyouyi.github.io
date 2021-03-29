import React,{ useState } from 'react'
import styled from 'styled-components'
import Envelope from '../static/Icon/FA/Envelope.svg'
import Lock from '../static/Icon/FA/Lock.svg'
import CaretDown from '../static/Icon/FA/CaretDown.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'

const Sign_in = props =>{
    const [show,setShow] = useState(false)
    const { t, i18n } = useTranslation();
    const history = useHistory()
    const lanMenu =[
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
    ]
    const changeLanguage = (lan) => {
        i18n.changeLanguage(lan)
        localStorage.setItem("locale", lan)
    }
    //判斷是否可以登入
    const sigin_in =()=>{
        // api.then(()=>{
        //     history.push('/home')
        // })
        history.push('/home')
    }

    return(
        <Style>
            <div className="sign_in">
                <h1>
                    SPHOTC
                </h1>
                <div className="box">

                    <h3>{t('sign_in.sign_in')}</h3>
                    <div className="input">
                        <input type="text" placeholder={t('sign_in.username')}/>
                        <img className="img" src={Envelope} alt="icon"/>
                    </div>
                    <div className="input">
                        <input type="password" placeholder={t('sign_in.password')}/>
                        <img className="img" src={Lock} alt="icon"/>
                    </div>
                    <div className="input">
                        <input type="number" placeholder={t('sign_in.code')}/>
                        <img className="img" src={Lock} alt="icon"/>
                    </div>
                    <div className="button" onClick={sigin_in}>
                        <span>{t('sign_in.sign_in')}</span>
                        {/* <Link to={'/home'}>{t('sign_in.sign_in')}</Link> */}
                    </div>
                    <div className="bottom">
                        <div className="wrap">
                            <div className="language" onClick={()=>{
                                setShow(!show)
                            }}>{t('sign_in.language')} 
                                <img className="caretDown" src={CaretDown} alt="icon"/>
                                <div className="lanBox" style={{
                                    display: show ? 'flex': 'none'
                                }}>
                                    {
                                        lanMenu.map((item,index)=>{
                                            return(
                                                <img  key={index} src={item.img} alt="icon" onClick={()=>{
                                                    changeLanguage(item.lan)
                                                }}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="registered">
                                <Link to={'/Registered'}>{t('registered.registered')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Style>
    )
}

const Style = styled.div`

.sign_in{
    max-width: 1024px;
    height:100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: #D2D6DE;
    h1{
        font-size:40px;
        color:#fff;
        text-shadow:0 3px 5px rgba(0,0,0,.3);
        font-weight:700;
        font-family: Arial-BoldMT;
        padding:40px 0;
    }
    .box{
        width:90%;
        height:46.5%;
        background-color:#fff;
        border-radius:10px;
        h3{
            font-family: PingFangTC-Semibold;
            font-size: 20px;
            color: #999999;
            font-weight: 600;
            text-align:center;
            padding:15px 0;
        }
        .input{
            display:flex;
            justify-content:center;
            width:100%;
            height:40px;
            margin-bottom:15px;
            position: relative;
            input{
                width:90%;
                background: #FFFFFF;
                border: 1px solid #DDDDDD;
                border-radius: 5px;
                padding-left:10px;
                font-size:14px;
                text-overflow: ellipsis; 
            }
            .img{
                width:26px;
                height:26px;
                position: absolute;
                right:5%;
                top:5px;
            }
        }
        .button{
            display:flex;
            justify-content:center;
            width:100%;
            a{
                display:flex;
                justify-content:center;
                align-items:center;
                width:calc(90% + 10px);
                height:40px;
                background-color:#03C0EF;
                border-radius: 5px;
                border:none;
                color:#fff;
                font-size:14px;
            }
            span{
                display:flex;
                justify-content:center;
                align-items:center;
                width:calc(90% + 10px);
                height:40px;
                background-color:#03C0EF;
                border-radius: 5px;
                border:none;
                color:#fff;
                font-size:14px;
            }
        }
        .bottom{
            width:100%;
            display:flex;
            justify-content:center;
            .wrap{
                width:calc(90% + 10px);
                display:flex;
                justify-content:space-between;
                padding:15px 0;
                >div{
                    font-family: PingFangTC-Medium;
                    font-size: 12px;
                    color: #3D8DBC;
                    font-weight: 500;
                    display:flex;
                    align-items:center;
                    a{
                        font-family: PingFangTC-Medium;
                        font-size: 12px;
                        color: #3D8DBC;
                        font-weight: 500;
                        display:flex;
                        align-items:center;
                    }
                }
                .language{
                    position: relative;
                    .lanBox{
                        position:absolute;
                        display:none;
                        left:60px;
                    }
                }
            }

        }

    }
}

`
export default Sign_in