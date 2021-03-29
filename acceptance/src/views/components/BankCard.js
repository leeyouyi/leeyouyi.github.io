import React,{useState} from 'react'
import styled from 'styled-components'
import TimesCircle from '../../assets/Icon/FA/TimesCircle.svg'
import Edit from '../../assets/Icon/FA/Edit.svg'
import { useDispatch } from 'react-redux'
import { list } from '../../action'
import { useTranslation } from 'react-i18next'

const BankCard = props =>{
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [mask,setMask] = useState(false)

    const inputData = [
        {
            text: t('form.cardholder')
        },
        {
            text: t('form.card_number')
        },
        {
            text: t('form.identity_number')
        },
    ]
    const infoData = [
        {
            text: t('table.status'),
            long:40
        },
        {
            text: t('table.operating'),
            long:40
        },
        {
            text: t('table.username'),

        },
        {
            text: t('table.cardholder')
        },
        {
            text: t('table.card_number'),
            long:150
        },
        {
            text: t('table.funding_limit'),

        },
        {
            text: t('table.bank_name'),
        },
        {
            text: t('table.branch_name'),
        },
        {
            text: t('table.identity_number'),
            long:150
        },
        {
            text: t('table.cell_phone'),
        },
        {
            text: t('table.creation_time'),
            long:150
        },
    ]
    const userData = [
        {
            text:false,
            long:40,
            img: TimesCircle,
            type:'status'
        },
        {
            text:false,
            long:40,
            img:Edit,
            type: 'edit'
        },
        {
            text:'15818333930'
        },
        {
            text:'吴巧红'
        },
        {
            text:'0000 1111 2222 3333',
            long:150
        },

        {
            text:'1000000'
        },
        {
            text:'邮政银行'
        },
        {
            text:'北京市怀柔区支行'
        },
        {
            text:'323564198001010378',
            long:150
        },
        {
            text:'12345678901'
        },
        {
            text:'2020-12-04 09:55:00',
            long:150
        },
    ]
    const clickHandler = (type)=>{
        // console.log(type)
        if(type === 'status'){
            setMask(true)
        }else if(type === 'edit'){
            dispatch(
                list(t('title.edit_bank_card'),'EditBankCard')
            ) 
        }
    }
    const confirm = ()=>{
        cancel()
    }
    const cancel = ()=>{
        setMask(false)
    }
    return(
        <Style>
            <div className="mask" style={{
                display: mask ? 'flex' :'none'
            }}>
                <div className="notice">
                    <h2>{t('alert.confirm_to_deactivate')}？</h2>
                    <div className="button">
                        <button onClick={confirm}>{t('alert.confirm')}</button>
                        <button onClick={cancel}>{t('alert.cancel')}</button>
                    </div>
                </div>
            </div>

                <div className="content">
                    <div className="inpotBox">
                        {
                            inputData.map((item,index)=>{
                                return(
                                    <div className="input" key={index}>
                                        <label>{item.text}</label>
                                        <input type="text" />
                                    </div>          
                                )
                            })
                        }
                        <button>{t('button.search')}</button>
                    </div>

                    <div className="infoBox">
                        <div className="info">
                            <table>
                                <thead>
                                    <tr>
                                        {
                                            infoData.map((item,index)=>{
                                                return(
                                                    <th key={index} style={{
                                                        width: item.long && item.long
                                                    }}>{item.text}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {
                                            userData.map((item,index)=>{
                                                return(
                                                    <td key={index} style={{
                                                        width: item.long && item.long
                                                    }}>
                                                        {
                                                            item.text 
                                                            ? item.text 
                                                            : <img src={item.img} alt="icon" onClick={()=>{
                                                                clickHandler(item.type)
                                                            }}/>

                                                        }
                                                        
                                                    </td>
                                                )
                                            }) 
                                        }
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>

        </Style>
    )
}
const Style = styled.div`
.mask{
    width:100vw;
    height:100vh;
    background: rgba(0,0,0,.4);
    position:fixed;
    display:none;
    justify-content:center;
    align-items:center;
    .notice{
        width:220px;
        height:120px;
        background: #FFFFFF;
        border-radius: 10px;
        h2{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            font-family: PingFangTC-Medium;
            font-size: 16px;
            color: #ADADAD;
            text-align: center;
            font-weight: 500;
        }
        .button{
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:50%;
            button{
                width:60px;
                height:30px;
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                font-weight: 500;
                background: #029688;
                border-radius: 5px;
                border:none;
                margin: 0 15px;
            }
        }
    }
}

.content{
    width:100vw;
    margin-top:60px;
    .inpotBox{
        display:flex;
        align-items:center;
        flex-direction:column;
        padding-top:10px;
        .input{
            width:90%;
            display:flex;
            align-items:center;
            padding:10px 0;
            label{
                width:80px;
                padding-left:10px;
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #ADADAD;
                font-weight: 500;
            }
            input{
                width:220px;
                height:30px;
                padding-left:10px;
                background: #FFFFFF;
                border: 1px solid #DDDDDD;
                border-radius: 5px;
            }
        }

        button{
            width:80px;
            height:40px;
            display:felx;
            align-items:center;
            justify-content:center;
            margin-top:10px;
            background: #029688;
            border-radius: 5px;
            font-family: PingFangTC-Medium;
            font-size: 14px;
            color: #FFFFFF;
            text-align: center;
            font-weight: 500;
            border:none;
        }

    }
    .infoBox{
        width:100%;
        display:flex;
        justify-content:center;
        margin-top:30px;
        .info{
            width:90%;
            border-top:solid 1px #ccc;
            overflow: scroll;
            table{
                padding:15px 0;
                tr{
                    display: inline-flex;
                }
                th{
                    width: 100px ;
                    font-family: PingFangTC-Medium;
                    font-size: 12px;
                    color: #ADADAD;
                    text-align: center;
                    font-weight: 500;
                    padding-bottom:10px;
                }
                td{
                    width: 100px ;
                    font-family: PingFangTC-Medium;
                    font-size: 12px;
                    color: #ADADAD;
                    text-align: center;
                    font-weight: 500;
                }
            }
        }
    }
}

`
export default BankCard