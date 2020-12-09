import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const HomeContent = props => {
  const { txt, jsonData } = props
  useEffect(() => {
    console.log(props)
    console.log(jsonData)
  }, [])
  return (
    <ContentStyle>
      <div className='content'>content</div>
      <div>{txt}</div>
    </ContentStyle>
  )
}
const ContentStyle = styled.div`
  .content {
  }
`
HomeContent.propTypes = {
  txt: PropTypes.string,
  jsonData: PropTypes.objectOf(PropTypes.object)
}

export default HomeContent
