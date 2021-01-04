import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomeBanner from '@/views/Home/HomeBanner'
import HomeContent from '@/views/Home/HomeContent'

const Home = props => {
  const [data, setData] = useState('')
  const url = process.env.REACT_APP_BASE_JSON + 'data.json'
  useEffect(() => {
    fetch(url)
      .then(function (response) {
        console.log(process.env)
        return response.json()
      })
      .then(function (json) {
        setData(json)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <Header />
      <HomeBanner />
      {data !== '' && <HomeContent jsonData={data} />}
      <Footer />
    </div>
  )
}

export default Home
