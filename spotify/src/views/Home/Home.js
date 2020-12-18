import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomeBanner from '@/views/Home/HomeBanner'
import HomeContent from '@/views/Home/HomeContent'

const Home = props => {
  const [data, setData] = useState('')
  useEffect(() => {
    fetch('./data.json')
      .then(function (response) {
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
