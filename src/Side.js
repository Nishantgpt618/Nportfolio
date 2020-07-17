import React from 'react'
import styled from 'styled-components'
import logo from './media/profile.png'
import fb from './media/Facebook.png'
import insta from './media/Instagram.png'
import linkedin from './media/Linkedin.png'
import frame from './media/logo512.png'
import './Side.css'


const Sidep = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 250px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 0.1em;      /* Stay at the top */
  overflow-x: hidden;     /* Disable horizontal scroll */
  text-align: center;
  color: black;


  #profile{
        padding-top: 1em;
        height: 150px;
        text-align: center;
    }
  img{
    padding-top: 1em;
        height: 40px;
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
`;

const Side = () => (
    <Sidep class="backg">
          <img id="frame" src={frame} alt="Frame"/><br />
          <a href="/"><img id="profile" src={logo} alt="logo"/></a>
          <br />
          <br />
          <h3>Nishant Gupta</h3>
          <br />
          <p>Nishantgpt618@gmail.com</p>
          <a href="/Intro">Introduction</a>
          <br />
          <br />
          <a href="/about">About</a>
          <br />
          <br />
          <a href="/timeline">Timeline</a>
          <br />
          <br />
          <a href="https://www.facebook.com/nishurocks/"><img src={fb} alt="logo" /></a>
          <br />
          <a href="https://www.instagram.com/nishantgpt618/"><img src={insta} alt="logo" /></a>
          <br />
          <a href="https://www.linkedin.com/in/nishant-gupta-a30a3212b/"><img src={linkedin} alt="logo" /></a>
          


        </Sidep>
)

export default Side