import React, { useState } from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navBtnToggle, setNavBtnToggle] = useState(faBarsStaggered);
  const [Overlay, setOverlay] = useState("overlay");
  const [NavMenu , setNavMenu] = useState("nav-menu");
  const Mobail =() =>{
    navBtnToggle === faBarsStaggered ? setNavBtnToggle (faX) : setNavBtnToggle(faBarsStaggered);
    Overlay === "overlay" ? setOverlay ("overlay active") : setOverlay("overlay");
    NavMenu === "nav-menu" ? setNavMenu("nav-menu active") : setNavMenu("nav-menu");
  }
  return (
    <>
      <nav>
          <ul className={NavMenu}>
              <li><Link to="/">home</Link></li>
              <li><Link to="/Series">all series</Link></li>
          </ul>
      </nav>
      <div className='nav-slid'>
        <FontAwesomeIcon onClick={Mobail} icon={navBtnToggle} style={{color: "#633b49",}} />
      </div>
      <div className={Overlay}></div>
    </>
  )
}

export default Navbar