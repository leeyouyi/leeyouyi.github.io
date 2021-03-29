import styled from "styled-components"
import { useTranslation } from 'react-i18next'

const MoneyManagement = props =>{
    const { t } = useTranslation()
    const inputData = [
        {
            text: t('form.username')
        },
        {
            text: t('form.merchant_code')
        },
        {
            text: t('form.channel_type'),
            select:[
                t('form.choose'),'test1','test2','test3'
            ]
        },
        {
            text: t('form.channel_name')
        },
        {
            text: t('form.status'),
            select:[
                t('form.choose'), t('form.enable'),t('form.disable')
            ]
        }
    ]
    const infoData = [
        {
            text: t('table.username'),
        },
        {
            text: t('table.agent_name'),
        },
        {
            text: t('table.quantity_balance'),
        },
        {
            text: t('table.amount_balance')
        },
        {
            text: t('table.quantity_freeze'),
        },
        {
            text: t('table.fund_freeze'),
        },
        {
            text: t('table.status'),
        }
    ]
    const userData = [
        {
            text:'吴巧红',
        },
        {
            text:'XXXXXX'
        },
        {
            text:'1000000',
        },
        {
            text:'1000000',
        },

        {
            text:'1000000'
        },
        {
            text:'1000000'
        },
        {
            text:'XXXXX'
        }

    ]
    return(
        <Style>
            <div className="content">
                <div className="inpotBox">
                    {
                        inputData.map((item,index)=>{
                            return(
                                <div className="input" key={index}>
                                    <div className="text">
                                        <label style={{
                                            justifyContent: 'flex-start',
                                        }}>{item.text}</label>
                                    </div>
                                    {
                                        item.select ?
                                        <select>
                                            {
                                                item.select.map((el,i)=>{
                                                    return <option key={i}>{el}</option>
                                                })
                                            }
                                        </select>
                                        :  <input type={item.time ? 'date' : 'text'} />
                                    }
                                </div>          
                            )
                        })
                    }
                    <div className="button">
                        <button>{t('button.search')}</button>
                    </div>
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
                                                    { item.text }
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
            .text{
                width:90px;
                display:flex;
            }
            label{
                width:80px;
                padding-left:10px;
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #ADADAD;
                font-weight: 500;
                display:flex;
            }
            input{
                width:220px;
                height:30px;
                padding-left:10px;
                background: #FFFFFF;
                border: 1px solid #DDDDDD;
                border-radius: 5px;
            }
            select{
                width:230px;
                height:35px;
                padding-left:10px;
                background: #FFFFFF;
                border: 1px solid #DDDDDD;
                border-radius: 5px;
                color: #ADADAD;
                option{
                    font-family: PingFangTC-Medium;
                    font-size: 14px;
                    color: #ADADAD;
                    line-height: 20px;
                    font-weight: 500;
                }
            }
        }
        .button{
            display:flex;
            justify-content:center;
            button{
                width:80px;
                height:40px;
                display:felx;
                align-items:center;
                justify-content:center;
                background: #029688;
                border-radius: 5px;
                font-family: PingFangTC-Medium;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                font-weight: 500;
                border:none;
                margin:0 10px;
                margin-top:20px;
            }
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
export default MoneyManagement