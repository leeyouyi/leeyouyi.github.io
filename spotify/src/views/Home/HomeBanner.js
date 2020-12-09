import styled from 'styled-components'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
const HomeBanner = props => {
  const data = [
    {
      src: require('@/static/images/banner01.jpg'),
      name: 'banner01'
    },
    {
      src: require('@/static/images/banner02.jpg'),
      name: 'banner02'
    },
    {
      src: require('@/static/images/banner03.jpg'),
      name: 'banner03'
    }
  ]

  return (
    <BannerStyle>
      <div className='bannerBox'>
        <div className='banner'>
          <Carousel dots autoPlay={2000} infinite>
            {data.map((item, index) => {
              return <img src={item.src} alt='banner' key={index} />
            })}
          </Carousel>
        </div>
      </div>
    </BannerStyle>
  )
}
const BannerStyle = styled.div`
  .bannerBox {
    width: 100%;
    height: 300px;
    .banner {
      width: 1000px;
      margin: 0 auto;
      position: relative;
      ul {
        width: 100%;
        height: 300px;
      }
      .BrainhubCarousel__dots {
        height: 25px;
        position: absolute;
        bottom: 0;
        li {
          button {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            position: relative;
            margin-right: 10px;
            padding: 5px;
            &::before {
              width: 100%;
              height: 100%;
              position: absolute;
              background: #1ed760;
              top: 0;
              left: 0;
            }
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`
export default HomeBanner
