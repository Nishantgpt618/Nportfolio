import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import logo from './media/profile.png'
import fb from './media/Facebook.png'
import insta from './media/Instagram.png'
import linkedin from './media/Linkedin.png'
import frame from './media/logo512.png'
import './Side.css'
import { Navbar, Nav } from 'react-bootstrap';



const Sidep = styled.div`
@media screen and (min-width:1081px){
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 300px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 0.1em;      /* Stay at the top */
  overflow-x: hidden;     /* Disable horizontal scroll */
  text-align: center;
  color: black;
  a{
    color: black;
}

  a:hover{
    color: blue;
    
}
 
  #frame {
    height: 200px;
    width: 200px;
    align-items: center;
  }


  #profile{
        padding-top: 1em;
        height: 150px;
        text-align: center;
    }
  .social {
    padding-top: 1em;
        height: 70px;
        text-align: center;  
  }
  
  h3{
    font-family: 'Sriracha', cursive;
  }
  p{
    font-family: 'Noto Sans JP ', sans-serif;
    font-size: 1em;
  }
  a{
    font-family: 'Odibee Sans', cursive;
    font-size: 1.5em;
  }
  .mobile{
    display: none;
  }

  }
@media screen and (max-width:1081px){
  .desktop{
    display: none;
  }
  #profile{
    height: 60px;
}
  .mobile{
    border: 20px,solid,black;
  }
}


  
`;


const Side = () => (
  <>
    <Sidep>
      <div className="desktop">
        <img id="frame" src={frame} alt="Frame" /><br />
        <Link to="/"><img id="profile" src={logo} alt="logo" /></Link>
        <br />
        <br />
        <h3>Nishant Gupta</h3>
        <br />
        <p>Nishantgpt618@gmail.com</p>
        {/* <Link to="/Intro">Introduction</Link>
          <br />
          <br /> */}
        <Link to="/about">About</Link>
        <br />
        <br />
        <Link to="/timeline">Timeline</Link>
        <br />
        <br />
        <Link to="/contact">Contact-Form</Link>
        <br />
        <br />
        <a href="https://www.facebook.com/nishurocks/"><img className="social" src={fb} alt="logo" /></a>
        <br />
        <a href="https://www.instagram.com/nishantgpt618/"><img className="social" src={insta} alt="logo" /></a>
        <br />
        <a href="https://www.linkedin.com/in/nishant-gupta-a30a3212b/"><img className="social" src={linkedin} alt="logo" /></a>
        <br />
        <br />
      </div>

      <div className="mobile">
        <Navbar  variant="light" expand="lg">
          <Navbar.Brand href="#/"><img id="profile" src={logo} alt="logo" />  Nishant Gupta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#/about">About</Nav.Link>
              <Nav.Link href="#/timeline">Timeline</Nav.Link>
              <Nav.Link href="#/contact">Contact-Form</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Sidep>
  </>
)

export default Side