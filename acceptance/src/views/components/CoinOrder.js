import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const CoinOrder = props =>{
    const { t } = useTranslation()
    const inputData = [
        {
            text:t('form.system_number')
        },
        {
            text:t('form.username')
        },
        {
            text:t('form.order_status'),
            select:[
                t('form.choose'),'test1','test2','test3'
            ]
        },
        {
            text:t('form.order_type'),
            select:[
                t('form.order_type'),'test1','test2','test3'
            ]
        },
        {
            text:t('form.time_limit'),
            time:true
        },
        {
            text: '~',
            time:true,
            end:true
        },
    ]
    const infoData = [
        {
            text:t('table.order_type'),
        },
        {
            text:t('table.username'),
        },
        {
            text:t('table.quantity'),
        },
        {
            text:t('table.cost'),
        },
        {
            text:t('table.number_of_credits'),
        },
        {
            text:t('table.order_status'),
        },
        {
            text:t('table.detailed_status'),
        },
        {
            text:t('table.remarks'),
        },
        {
            text:t('table.type'),
        },
        {
            text:t('table.address'),
        },
        {
            text:t('table.system_number'),
        },
        {
            text:t('table.creation_time'),
            long:150
        },
    ]
    const userData = [
        {
            text:'xxxxxxxxxxxx',
        },
        {
            text:'吴巧红',
        },
        {
            text:'1000000'
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
            text:'1000000'
        },
        {
            text:'XXXXXXXXXX'
        },
        {
            text:'XXXXXXXXXX'
        },
        {
            text:'XXXXXXXXXX'
        },
        {
            text:'XXXXXXXXXX'
        },
        {
            text:'2020-12-04 09:55:00',
            long:150
        }
    ]
    const information = '确认金额：0.00  数量(USDT)：0.00  费用(USDT)：0.00  入账数量(USDT)：0.00'
    return(
        <Style>

            <div className="content">
                <div className="inputBox">
                    {
                        inputData.map((item,index)=>{
                            return(
                                <div className="input" key={index}>
                                    <div className="text">
                                        <label style={{
                                            justifyContent: item.end ?'center':'flex-start',
                                            marginRight: item.end ?'10px' : '0'
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
                        <button>{t('button.export')}</button>
                    </div>

                    <div className="information">
                        {information}
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
    .inputBox{
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
        .information{
            width:90%;
            padding-top:20px;
            font-family: PingFangTC-Medium;
            font-size: 14px;
            color: #ADADAD;
            font-weight: 500;
            display:flex;
        }
    }
    .infoBox{
        width:100%;
        display:flex;
        justify-content:center;
        margin-top:30px;
        padding-bottom:15px;
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
export default CoinOrder