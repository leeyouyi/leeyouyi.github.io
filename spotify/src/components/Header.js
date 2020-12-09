// import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Header = props => {
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
        width: 80%;
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
    }
  }
`
export default Header
