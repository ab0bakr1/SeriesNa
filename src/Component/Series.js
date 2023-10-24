import React from 'react'
import Header from './header/Header'
import Series from './Series/Series'
import Footer from './Footer/Footer'

const SeriesPage = () => {
  return (
    <>
      <Header />
      <Series OnePage={0} TowPage={36}/>
      <Footer />  
    </>
  )
}

export default SeriesPage