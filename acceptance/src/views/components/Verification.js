import React,{ useState } from 'react'
import styled from 'styled-components'
import SideA from '../../assets/Img/SideA.svg'
import SideAB from '../../assets/Img/SideAB.svg'
import SideB from '../../assets/Img/SideB.svg'
import { useTranslation } from 'react-i18next'

const Verification = props =>{
    const { t } = useTranslation()
    const [imgA,setImgA] = useState(SideA)
    const [imgB,setImgB] = useState(SideB)
    const [imgAB,setImgAB] = useState(SideAB)
    const data = [
        {
            img: imgA,
            btn: t('button.upload_A'),
            id:'SideA'
        },
        {
            img: imgB,
            btn: t('button.upload_B'),
            id:'SideB'
        },
        {
            img: imgAB,
            btn: t('button.upload_ID'),
            id:'SideAB'
        },
    ]

    const readURL =(input,id) =>{

        if(input.files && input.files[0]){
            let reader = new FileReader();
            reader.onload =  e => {
                if( id === 'SideA'){
                    setImgA(e.target.result)
                }else if( id === 'SideB'){
                    setImgB(e.target.result)
                }else{
                    setImgAB(e.target.result)
                }
            }
            reader.readAsDataURL(input.files[0]);
          }
    }
    return(
        <Style>
                <div  className="content">
                   <div className="inputBox">
                       <div className="input">
                            <label>{t('form.username')}</label>
                            <input type="text" />
                       </div>
                       <div className="input">
                            <label>{t('form.actual_name')}</label>
                            <input type="text" />
                       </div>
                   </div>

                    <div className="identityBox">
                        {
                            data.map((item,index)=>{
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
            justify-content:center;
            align-items:center;
            flex-direction:column;
            padding-bottom:10px;
            .input{
                width:90%;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                padding:15px 0;
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
                    height:40px;
                    background: #FFFFFF;
                    border: 1px solid #DDDDDD;
                    border-radius: 5px;
                    padding-left:10px;
                    color:#ADADAD;
                }
                
            }
        }
        .identityBox{
            display:flex;
            flex-direction:column;
            align-items:center;
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
                    width:100px;
                    height:40px;
                    font-family: PingFangTC-Medium;
                    font-size: 14px;
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
export default Verification