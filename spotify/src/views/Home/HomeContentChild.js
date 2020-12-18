import React, { useEffect, useContext } from 'react'
import { ThemeContext } from '@/views/Home/HomeContent'
const HomeContentChild = props => {
  const theme = useContext(ThemeContext)
  useEffect(() => {
    // console.log(ThemeContext)
    console.log(theme)
  }, [])
  return <div>HomeContentChild</div>
}

export default HomeContentChild
