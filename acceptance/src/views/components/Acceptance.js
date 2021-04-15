import styled from 'styled-components'
import TimesCircle from '../../static/Icon/FA/TimesCircle.svg'
import CheckCircle from '../../static/Icon/FA/CheckCircle.svg'
import { useTranslation } from 'react-i18next'

// console.log(process.env)
const Acceptance = props =>{
    const { t } = useTranslation()
    const data = [
        {
            text: t('form.system_number')
        },
        {
            text: t('form.merchant_number')
        },
        {
            text: t('form.order_status'),
            select:[
                t('form.choose'),'test1','test2','test3'
            ]
        },
        {
            text: t('form.username')
        },
        {
            text: t('form.time_limit'),
            time:true
        },
        {
            text: '~',
            time:true,
            end:true
        },
    ]
    const infoData =[
        {
            text: t('table.operating'),
            long:80,
        },
        {
            text: t('table.real_name')
        },
        {
            text: t('table.cardholder')
        },
        {
            text: t('table.card_number')
        },
        {
            text: t('table.bank_name')
        },
        {
            text: t('table.branch_name')
        },
        {
            text: t('table.order_amount')
        },
        {
            text: t('table.confirm_amount')
        },
        {
            text:'USDT'
        },
        {
            text: t('table.cost')
        },
        {
            text: t('table.number_of_credits')
        },
        {
            text: t('table.system_number')
        },
        {
            text: t('table.remarks')
        },
        {
            text: t('table.username')
        },
        {
            text: t('table.creation_time'),
            long:150
        },
    ]

    const userData =[
        {
            text: false,
            long:80,
        },
        {
            text:'吴巧红'
        },
        {
            text:'吴巧红'
        },
        {
            text:'15818333930'
        },
        {
            text:'邮政银行'
        },
        {
            text:'北京市怀柔区支行'
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
            text:'1000000'
        },
        {
            text:'1000000'
        },
        {
            text:'11113749472389'
        },
        {
            text:'XXX'
        },
        {
            text:'吴巧红'
        },
        {
            text:'2020-12-04 09:55:00',
            long:150
        },
    ]

    return (
        <Style>
            <div className="content">
                <div className="inputBox">
                {
                    data.map((item,index)=>{
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
                </div>
                <div className="button">
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
                                                        : 
                                                        <>
                                                          <img src={TimesCircle} alt="icon" />
                                                          <img src={CheckCircle} alt="icon" />
                                                        </>

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
    .content{
        width:100vw;
        margin-top:60px;
        .inputBox{
            width:100%;
            display:flex;
            align-items:center;
            flex-direction:column;
            padding-top:20px;
            .input{
                width:80%;
                display:flex;
                align-items:center;
                padding:8px 0 ;
                .text{
                    width:80px;
                    display:flex;
                }
                span{
                    display:flex;
                    align-items:center;
                    font-family: PingFangTC-Medium;
                    font-size: 18px;
                    color: #FF0000;
                    line-height: 20px;
                    font-weight: 600; 
                }
                label{
                    width:90px;
                    padding-left:5px;
                    font-family: PingFangTC-Medium;
                    font-size: 14px;
                    color: #ADADAD;
                    line-height: 20px;
                    font-weight: 500;
                    display:flex;
                }
                input{
                    width:220px;
                    height:35px;
                    padding-left:10px;
                    background: #FFFFFF;
                    border: 1px solid #DDDDDD;
                    border-radius: 5px;
                }
                select{
                    width:230px;
                    height:40px;
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
        }
        .button{
            display:flex;
            justify-content:center;
            align-items:center;
            padding: 20px 0 ;
            button{
                width:80px;
                height:40px;
                ont-family: PingFangTC-Medium;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                font-weight: 500;
                background: #029688;
                border-radius: 5px;
                border:none;
                margin: 0 20px;
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
                    img{
                        margin: 0 10px;
                    }
                }
            }
        }
    }
`

export default Acceptance