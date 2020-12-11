import React, { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HomeContent = props => {
  const { jsonData } = props

  useEffect(() => {
    // console.log(props)
    // console.log(jsonData)
  }, [])
  return (
    <ContentStyle>
      <div className='content'>
        <Item
          title={jsonData.chinese.title}
          imgs={jsonData.chinese.imgs}
          path={'/PopularChinese'}
        />
        <Item
          title={jsonData.japan_korea.title}
          imgs={jsonData.japan_korea.imgs}
          path={'/JapanAndSouthKorea'}
        />
        <Item
          title={jsonData.western.title}
          imgs={jsonData.western.imgs}
          path={'/WesternMusic'}
        />
        <Item
          title={jsonData.podcast.title}
          imgs={jsonData.podcast.imgs}
          path={'/Podcast'}
        />
      </div>
    </ContentStyle>
  )
}
const Item = props => {
  const { title, imgs, path } = props
  const history = useHistory()
  const handleOnClick = useCallback(() => history.push(path), [history])

  return (
    <div className='item'>
      <div className='title'>{title}</div>
      <ul className='list'>
        {imgs.map((item, index) => {
          return (
            <li key={index} onClick={handleOnClick}>
              <img src={require('@/static/images/' + item.img)} alt='' />
              <p>{item.text}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const ContentStyle = styled.div`
  .content {
    padding-top: 30px;
    padding-bottom: 30px;
    .item {
      width: 1000px;
      height: 180px;
      display: flex;
      margin: 0 auto;
      padding-top: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        width: 950px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .list {
        width: 900px;
        display: flex;
        justify-content: flex-start;
        li {
          display: flex;
          flex-direction: column;
          width: 150px;
          height: 100px;
          padding-left: 5px;
          padding-right: 5px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100px;
          }
          p {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .content {
      padding-top: 5px;
      padding-bottom: 5px;
      .item {
        width: 100%;
        height: auto;
        padding-top: 0px;
        .title {
          width: 100%;
          padding-left: 30px;
        }
        .list {
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
          padding: 0 10px;
          li {
            width: 170px;
            height: 100%;
            padding: 0 10px;
            p {
              padding: 5px 0;
            }
          }
        }
      }
    }
  }
`
HomeContent.propTypes = {
  txt: PropTypes.string,
  jsonData: PropTypes.objectOf(PropTypes.object)
}
Item.propTypes = {
  title: PropTypes.string,
  imgs: PropTypes.arrayOf(PropTypes.object),
  path: PropTypes.string
}
export default HomeContent
