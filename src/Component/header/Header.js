import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Logo from "./logo/Logo";
import Search from "./search/Search";
import "./Header.css"
import { Container } from "react-bootstrap";

const Header =()=> {
    const [fix,setfix] = useState(false)
    function setfixed () {
        if (window.scrollY > 100){
            setfix(true)
        }else{
            setfix(false)
        }
    }
    window.addEventListener("scroll",setfixed)
    return (
        <header className={ fix ?'scroll' :null}>
            <Container>
                <div className="header">
                    <Logo />
                    <Search />
                    <Navbar />
                </div>    
            </Container>    
        </header>
    )
}
export default Header;