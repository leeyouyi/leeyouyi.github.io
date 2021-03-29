import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { list } from '../../action'
import { useTranslation } from 'react-i18next'

const AmountQuery = props =>{
    const { t } = useTranslation()
    const dispactch = useDispatch()
    const infoData = [
        {
            text: t('table.username')
        },
        {
            text: t('table.quantity_balance')
        },
        {
            text: t('table.amount_balance')
        },
        {
            text: t('table.quantity_freeze')
        },
        {
            text: t('table.fund_freeze')
        }
    ]
    const userData = [
        {
            text:'15818333930'
        },
        {
            text:'1,001.33'
        },
        {
            text:'0.000000'
        },
        {
            text:'0.00'
        },
        {
            text:'0.000000'
        }
    ]
    const coinHandeler = (type)=>{
        console.log('coinHandeler')
        const title =  type === 'set' ? '充币' : '提币'
        dispactch(
            list( title,'Coin')
        )
    }

    return(
        <Style>
            <div className="content">
                <div className="button">

                    <button onClick={()=>{
                        coinHandeler('set')
                    }}>{t('button.recharge')}</button>
                    <button onClick={()=>{
                        coinHandeler('get')
                    }}>{t('button.withdraw')}</button>
                    <button onClick={()=>{
                        dispactch(
                            list('提款','Withdrawal')
                        )
                    }}>{t('button.withdrawal')}</button>
                </div>
                <div className="info">
                    <table>
                        <thead>
                            <tr>
                                {
                                    infoData.map((item,index)=>{
                                        return(
                                            <th key={index}>{item.text}</th>
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
                                            <td key={index}>
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
        </Style>
    )
}

const Style = styled.div`
.content{
        width:100vw;
        margin-top:60px;
        .info{
            width:100%;
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
    .button{
        width:70%;
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 20px 10px ;
        button{
            width:80px;
            height:30px;
            ont-family: PingFangTC-Medium;
            font-size: 14px;
            color: #FFFFFF;
            text-align: center;
            font-weight: 500;
            background: #029688;
            border-radius: 5px;
            border:none;
            margin: 0 5px;
        }
    }
}
`
export default AmountQuery