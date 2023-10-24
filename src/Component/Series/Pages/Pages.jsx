import React from 'react'
import "./Pages.css"
import { Link } from 'react-router-dom'

const Pages = () => {
  return (
    <ul className='pages w-100 d-flex'>
      <li><Link to="/Series/1">1</Link></li>
      <li><Link to="/Series/2">2</Link></li>
      <li><Link to="/Series/3">3</Link></li>
      <li><Link to="/Series/4">4</Link></li>
      <li><Link to="/Series/5">5</Link></li>
      <li><Link to="/Series/6">6</Link></li>
      <li><Link to="/Series/7">7</Link></li>
    </ul>
  )
}

export default Pages