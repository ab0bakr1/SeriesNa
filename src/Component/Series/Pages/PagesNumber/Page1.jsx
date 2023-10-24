import React from 'react'
import Header from '../../../header/Header'
import Series from '../../Series'
import Footer from '../../../Footer/Footer'

const Page1 = () => {
  return (
    <>
        <Header />
        <Series OnePage={0} TowPage={36}/>
        <Footer />
    </>
  )
}

export default Page1