import React from 'react'
import { Container, Row } from 'react-bootstrap'
import logo from "../../IMG/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <Container >
        <Row >
            <footer className='d-flex flex-column justify-content-center'>
                <div className='m-auto'>
                    <img width={"150px"} src={logo} />
                </div>
                <div className='text-center py-3 d-flex flex-column'>
                    <p style={{color:"#fff", margin:"0"}}>&copy; Copyrights SeriesNa - All Rights Reserved | Designed by <span style={{color:"rgb(250,66,56)"}}>Abobakr Almashhor</span>.</p>
                    <div className='d-flex gap-3 justify-content-center fs-2'>
                        <a href='https://www.linkedin.com/in/abobakr-almashhor/' target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{color: "rgb(250,66,56)",}} /></a>
                        <a href='https://www.facebook.com/profile.php?id=100068290724398' target='_blank'><FontAwesomeIcon icon={faSquareFacebook} style={{color: "rgb(250,66,56)",}} /></a>
                        <a href='https://github.com/ab0bakr1' target='_blank'><FontAwesomeIcon icon={faSquareGithub} style={{color: "rgb(250,66,56)",}} /></a>
                    </div>
                </div>       
            </footer>
        </Row>
    </Container>
  )
}

export default Footer