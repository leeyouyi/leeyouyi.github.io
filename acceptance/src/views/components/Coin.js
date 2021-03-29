import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { list } from '../../action'

const Coin = props =>{
    const {title} = props
    const dispactch = useDispatch()
    const data = [
        {
            text:'协议类型',
            select:[
                '请选择','test1','test2','test3'
            ]
        },
        {
            text: title === '充币' ? '充币地址' : '提币地址'
        },
        {
            text: title === '充币' ? '充币数量' : '提币数量'
        },
        {
            text:'备注 ',
            optional:true
        }
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
                                {
                                    !item.optional && <span>*</span>
                                }

                                <label>{item.text}</label>
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
                                    :  <input type="text" />
                                }

                            
                            </div>
                        )
                    })
                    
                }
                </div>
                <div className="button">
                    <button onClick={()=>{
                        dispactch(
                            list(
                                '资金查询','AmountQuery'
                            )
                        )
                    }}>提交</button>
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
                    width:90px;
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
`

export default Coin