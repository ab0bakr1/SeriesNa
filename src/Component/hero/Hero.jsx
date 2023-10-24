import React from 'react'
import "./Hero.css"
import { Col, Row } from 'react-bootstrap'
import TheBest from './swiper/TheBest'
import Trending from './swiper/Trending'

const Hero = () => {
  return (
    <section className='hero'>
      <Row className='p-0 w-100 h-50 m-auto align-content-center'>
        <h1 className=''>Welcome to the world of <span>SeriesNa</span>.</h1>
        <p>enjoy the best series with high quality and excellent subtitle</p>
      </Row>
      <Row style={{backgroundColor:"#00000080"}} className='w-100 m-auto mt-5 mb-5'>
        <TheBest />        
      </Row>   
      <Row style={{backgroundColor:"#00000080"}} className='w-100 m-auto'>
        <Trending />        
      </Row>     
    </section>
  )
}

export default Hero