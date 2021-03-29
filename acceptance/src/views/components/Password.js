import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Password = props =>{
    const { t } = useTranslation()
    const data = [
        {
            text: t('form.current_password'),
        },
        {
            text: t('form.new_password')
        },
        {
            text: t('form.confirm_password')
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
                                    <label>{item.text}</label>
                                </div>
                                 <input type="text" />
                            </div>
                        )
                    })
                    
                }
                </div>
                <div className="button">
                    <button onClick={()=>{

                    }}>{t('button.submit')}</button>
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
                width:90%;
                display:flex;
                align-items:center;
                padding:8px 0 ;
                .text{
                    width:100px;
                    display:flex;
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

export default Password