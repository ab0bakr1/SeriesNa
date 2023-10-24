import React from 'react'
import Hero from './hero/Hero'
import Series from './Series/Series'
import Header from './header/Header'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <>
        <Header />  
        <Hero />
        <Series OnePage={0} TowPage={36}/>
        <Footer />
    </>
  )
}

export default Home