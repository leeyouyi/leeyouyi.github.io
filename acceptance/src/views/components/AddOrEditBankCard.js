import React,{ useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { list } from '../../action'
import ASide from '../../static/Img/ASide.svg'
import BSide from '../../static/Img/BSide.svg'
import { useTranslation } from 'react-i18next'

const AddOrEditBankCard = props =>{
    const { t } = useTranslation()
    const src = props.src
    const dispactch = useDispatch()
    const [imgA,setImgA] = useState(ASide)
    const [imgB,setImgB] = useState(BSide)
    const addData = [
        {
            text: t('form.cardholder')
        },
        {
            text: t('form.bank_code'),
            select:[
               t('form.choose'),'test1','test2','test3'
            ]
        },
        {
            text: t('form.bank_name')
        },
        {
            text: t('form.card_number')
        },
        {
            text: t('form.branch_name')
        },
        {
            text: t('form.funding_limit')
        },
        {
            text: t('form.account_province'),
            optional:true  
        },
        {
            text: t('form.account_city'),
            optional:true
        },
        {
            text: t('form.cell_phone'),
            optional:true
        },
        {
            text: t('form.identity_number'),
            optional:true
        }
    ]
    const editData = [
        {
            text: t('form.cardholder')
        },
        {
            text: t('form.bank_name')
        },
        {
            text: t('form.card_number')
        },
        {
            text: t('form.branch_name')
        },
        {
            text: t('form.funding_limit')
        },
        {
            text: t('form.upper_limit')
        },
        {
            text: t('form.lower_limit')
        },
        {
            text: t('form.account_province'),
            optional:true  
        },
        {
            text: t('form.account_city'),
            optional:true
        },
        {
            text: t('form.cell_phone'),
            optional:true
        },
        {
            text: t('form.identity_number'),
            optional:true
        }
    ]
    const uploadData = [
        {
            img: imgA,
            btn: t('button.upload_A'),
            id:'ASide'
        },
        {
            img: imgB,
            btn:t('button.upload_B'),
            id:'BSide'
        }
    ]
    const addHandler = ()=>{
        submitHandler()
    }
    const submitHandler = ()=>{
        dispactch(
            list(
                '银行卡管理','BankCard'
            )
        )
    }
    const readURL =(input,id) =>{

        if(input.files && input.files[0]){
            let reader = new FileReader();
            reader.onload =  e => {
                if( id === 'ASide'){
                    setImgA(e.target.result)
                }else{
                    setImgB(e.target.result)
                }
            }
            reader.readAsDataURL(input.files[0]);
          }
    }
    return(
        <Style>
            <div className="content">

                <SetBankCard  data={src==='AddBankCard'? addData : editData} src={src}/>
                {
                    src==='AddBankCard' &&
                    <div className="identityBox">
                        {
                            uploadData.map((item,index)=>{
                                return(
                                    <div className="identity" key={index}>
                                        <img src={item.img} alt="img" />
                                        <label htmlFor={item.id}>{item.btn}</label>
                                        <form action="fileUpload" encType="multipart/form-data">
                                            <input type="file" id={item.id} accept="image/gif, image/jpeg, image/png" onChange={(e)=>{
                                                // console.log(e.target.files)
                                                readURL(e.target,item.id)

                                            }}/>
                                        </form>
                                    </div>
                                )
                            })
                        }
                    </div>
                }

                <div className="button">
                    {
                        src === 'AddBankCard' ?
                        <>
                        <button onClick={addHandler}>{t('button.add')}</button>
                        <button onClick={submitHandler}>{t('button.return')}</button>
                        </>

                        :
                        <button onClick={submitHandler}>{t('button.submit')}</button>
                    }

                </div>
            </div>

        </Style>
    )
}
 
const SetBankCard = props =>{
    const {data} = props

    return(
      
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
    .identityBox{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-bottom:15px;
        .identity{
            display:flex;
            align-items:center;
            flex-direction:column;
            padding:15px 0;
            img{
                margin-bottom:25px;
            }
            label{
                display:flex;
                align-items:center;
                justify-content:center;
                width:85px;
                height:30px;
                font-family: PingFangTC-Medium;
                font-size: 12px;
                text-align: center;
                font-weight: 500;
                color:#fff;
                background: #029688;
                border-radius: 5px;
            }
            input{
                opacity:.1;
                display:none;
            }
        }
    }
}
`

export default AddOrEditBankCard