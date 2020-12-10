import React, { useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { mask } from '@/action'
const Header = props => {
  const isLogin = useSelector(state => state.loginReducer.login)
  const isMask = useSelector(state => state.maskReducer.mask)
  const dispatch = useDispatch()
  const doLoin = useCallback(() => dispatch(mask(true)), [])
  // const doSingOut = useCallback(() => dispatch(mask(false)), [])
  useEffect(() => {
    console.log({ isLogin })
  }, [isLogin])
  useEffect(() => {
    console.log({ isMask })
  }, [isMask])

  const menu = [
    {
      text: '首頁',
      path: '/'
    },
    {
      text: '華語流行',
      path: '/PopularChinese'
    },
    {
      text: '日韓熱門',
      path: '/JapanAndSouthKorea'
    },
    {
      text: '西洋音樂',
      path: '/WesternMusic'
    },
    {
      text: 'Podcast',
      path: '/Podcast'
    }
  ]
  const logo = require('@/static/images/logo.png')
  return (
    <HeaderStyle>
      <header>
        <div className='header'>
          <div className='logo'>
            <NavLink to={'/'}>
              <img src={logo} alt='logo' />
            </NavLink>
          </div>

          <ul className='menu'>
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink exact activeClassName='on' to={item.path}>
                    {item.text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <div className='loginBxo'>
            <div className='login' onClick={doLoin}>
              登入
            </div>
            {/* {!isLogin ? (
              <div className='login' onClick={doLoin}>
                登入
              </div>
            ) : (
              <div className='loginAfter' onClick={doSingOut}>
                登出
              </div>
            )} */}
          </div>
        </div>
      </header>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  header {
    width: 100%;
    height: 80px;
    background: #000;
    display: flex;
    justify-content: center;
    .header {
      width: 1000px;
      display: flex;
      justify-content: center;
      .logo {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 80px;
        }
      }
      .menu {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25%;
          a {
            color: #fff;
          }
          .on {
            color: #ff8000;
          }
        }
      }
      .loginBxo {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        .login {
          cursor: pointer;
        }
      }
    }
  }
`
export default Header
