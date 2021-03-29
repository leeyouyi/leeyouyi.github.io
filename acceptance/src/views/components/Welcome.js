import React from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
const Welcome = props =>{
    const { t } = useTranslation();
    return(
        <Style>
            <div className="content">
                <p>{t('welcome.top')}</p>
                <p>{t('welcome.bottom')}</p>
            </div>
        </Style>
    )
}
const Style = styled.div`

    .content{
        width:100vw;
        height:calc(100vh - 60px);
        margin-top:60px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            font-family: PingFangTC-Medium;
            font-size: 18px;
            color: #03C0EF;
            text-align: center;
            font-weight: 700;
            margin-bottom:10px;
        }
    }


`
export default Welcome