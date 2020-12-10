import styled from 'styled-components'
const Footer = props => {
  return (
    <Style>
      <div className='footer'>copyright ©2020</div>
    </Style>
  )
}
const Style = styled.div`
  .footer {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #fff;
  }
`
export default Footer
