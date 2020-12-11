import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { login, mask } from '@/action'
const Login = props => {
  //   const isMask = useSelector(state => state.maskReducer.mask)
  const dispatch = useDispatch()
  const close = useCallback(() => dispatch(mask(false)), [])
  const doLogin = useCallback(() => {
    dispatch(mask(false))
    dispatch(login(true))
    alert('登入成功')
  }, [])
  const stop = useCallback(e => e.stopPropagation(), [])

  //   useEffect(() => {
  //     console.log({ isMask })
  //   }, [isMask])
  return (
    <Style>
      <div></div>
      <div className='mask' onClick={close}>
        <div className='loginBox' onClick={stop}>
          <div className='inputBox'>
            <label htmlFor='username'>帳號 : </label>
            <input type='text' name='username' id='username' />
          </div>
          <div className='inputBox'>
            <label htmlFor='username'>密碼 : </label>
            <input type='password' name='password' id='password' />
          </div>
          <div className='buttonBox'>
            <button onClick={doLogin}>確認</button>
          </div>
        </div>
      </div>
    </Style>
  )
}
const Style = styled.div`
  .mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    .loginBox {
      width: 300px;
      height: 180px;
      background: #fff;
      border-radius: 15px;
      .inputBox {
        padding-top: 15px;
        padding-bottom: 15px;
        &:first-child {
          padding-top: 40px;
        }
        label {
          color: #000;
          padding-right: 10px;
        }
      }
      .buttonBox {
        display: flex;
        justify-content: flex-end;
        padding-top: 5px;
        padding-right: 40px;
      }
    }
  }
`
export default Login
