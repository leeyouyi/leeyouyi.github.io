import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { list } from '../../action'
import { useTranslation } from 'react-i18next'

const Withdrawal = props =>{
    const { t } = useTranslation()
    const dispactch = useDispatch()
    const data = [
        {
            text:'持卡人'
        },
        {
            text:'银行名称'
        },
        {
            text:'卡号'
        },
        {
            text:'支行名称'
        },
        {
            text:'资金限额'
        },

        {
            text:'开户省',
            optional:true  
        },
        {
            text:'开户市',
            optional:true
        },
        {
            text:'手机',
            optional:true
        },
        {
            text:'身分证号',
            optional:true
        }
    ]

    const submitHandler = ()=>{
        dispactch(
            list(
                '资金查询','AmountQuery'
            )
        )
    }
    return(
        <Style>
            <div className="content">
                <div className="top">
                    <div className="input">
                        <label>代付信息</label>
                        <select>
                            <option>请选择</option>
                        </select>
                    </div>
                    <div className="btn">
                        <button>保存银行信息</button>
                    </div>
                   
                </div>
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

                                    <input type="text" />

                                </div>
                            )
                        })
                        
                    }
                </div>

                <div className="button">
                    <button onClick={submitHandler}>提交</button>
                </div>
                
            </div>
        </Style>
    )
}

const Style = styled.div`
.content{
    width:100vw;
    margin-top:60px;
    .top{
        width:100%;
        display:flex;
        align-items:center;
        flex-direction:column;
        padding:10px 0 ;
        .btn{
            width:80%;
            display:flex;
            justify-content:flex-start;
            button{
                width:110px;
                height:40px;
                ont-family: PingFangTC-Medium;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                font-weight: 500;
                background: #029688;
                border-radius: 5px;
                border:none;
                margin: 10px 0;
            }
        }

    }
    .inputBox{
        width:100%;
        display:flex;
        align-items:center;
        flex-direction:column;
        padding-top:10px;
        border-top:solid 1px #ccc;
    }
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
            width:220px;
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

export default Withdrawal