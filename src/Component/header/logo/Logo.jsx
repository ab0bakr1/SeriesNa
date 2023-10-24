import React from 'react'
import img from "../../../IMG/logo.png"

const Logo = () => {
  return (
    <div>
        <img src={img} style={{width:"200px", position:"relative" ,zIndex:"55"}} alt="logo" />
    </div>
  )
}

export default Logo