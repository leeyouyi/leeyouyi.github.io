import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, mask, fetchDataBegin } from '@/action'
const Header = props => {
  const isLogin = useSelector(state => state.loginReducer.login)
  const data = useSelector(state => state.fetchDataReducer.data)
  const dispatch = useDispatch()
  const doLoin = useCallback(() => dispatch(mask(true)), [])
  const doSingOut = useCallback(() => {
    dispatch(login(false))
    alert('已登出')
  }, [])
  useEffect(() => {
    console.log({ data })
    dispatch(fetchDataBegin())
  }, [])

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
  const ary = [0, 1, 2]
  return (
    <HeaderStyle>
      <header>
        <div className='header'>
          <div className='logo'>
            <NavLink to={'/'}>
              <img src={logo} alt='logo' />
            </NavLink>
          </div>
          <div className='nav'>
            <div className='iconbox'>
              {ary.map((item, index) => {
                return <p key={index}></p>
              })}
              <ul>
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
            </div>
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
            {!isLogin ? (
              <div className='login' onClick={doLoin}>
                登入
              </div>
            ) : (
              <div className='loginAfter' onClick={doSingOut}>
                登出
              </div>
            )}
          </div>
        </div>
      </header>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  @mixin test {
    @media (max-width: 767px) {
      @content;
    }
  }
  header {
    @include test() {
      background: #fff;
    }
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
      .nav {
        display: none;
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
        .loginAfter {
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 767px) {
    header {
      height: 80px;
      .header {
        .menu {
          display: none;
        }
        .logo {
          width: 33.333%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
        }
        .nav {
          width: 33.333%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .iconbox {
            position: relative;
            &:hover ul {
              display: flex;
            }
            p {
              width: 40px;
              height: 3px;
              background: #fff;
              border-radius: 5px;
              margin-bottom: 5px;
            }
            ul {
              display: none;
              position: fixed;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 100vw;
              padding-bottom: 10px;
              background: #000;
              top: 0;
              left: 0;
              z-index: 999;
              li {
                padding: 10px 0;
              }
            }
          }
        }
        .loginBxo {
          width: 33.333%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          padding-right: 15px;
        }
      }
    }
  }
`
export default Header
