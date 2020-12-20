import React from 'react'
import log from './media/hexagon.png'
import styled from 'styled-components'
import './css/Intr.css'



const Int = styled.div`
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
    }
  @media screen and (max-width:1081px){
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 45px;
    width: 100%;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */      /* Stay at the top */
    overflow-x: hidden;     /* Disable horizontal scroll */
    color: white;
    display: flex;
    background: black;
    justify-content: space-around;
  
  
    
  
    .frame {
      display: none;
    }
  
  
    #profile{
      height: 40px;
      }
  
      
    .social {
      display: none;
    }
    
    h3{
      display: none;
    }
    p{
      display: none;
    }
    a{
      font-family: 'Odibee Sans', cursive;
      font-size: 1.3em;
    }
    #frame {
      display: none;
    }
    Link{
      font-size: 0.7em;
    }
  
  }
`;

const Box1 = styled.div`
    width: 300px;
    height: 200px;
    border: solid 1px black;
    margin-left: 20em;
    margin-top: 2em;
    background: grey;
    color: white;
    text-align: center;


   


    img {
        margin-top: -34px;
    }

    @media screen and (max-width:1081px){
        width: 200px;
    height: 200px;
    border: solid 1px black;
    margin-left: 7em;
    margin-top: 10em;
    background: grey;
    color: white;
    font-size: 10px;
   


    img {
        margin-top: -34px;
    }
    }

`;
const Box2 = styled.div`
    width: 300px;
    height: 200px;
    border: solid 1px black;
    margin-left: 20em;
    margin-top: 5em;
    background: grey;
    color: white;
    


    img {
        margin-top: -34px;
    }

    @media screen and (max-width:1081px){
        width: 200px;
    height: 200px;
    border: solid 1px black;
    margin-left: 7em;
    margin-top: 7em;
    background: grey;
    color: white;
    font-size: 10px;


    img {
        margin-top: -34px;
    }
    }
    
`;

const Intro = () => (
    <div>
    <div class="list">
    <Int>
        <p>This page will be maintained soon!!</p>
        <br />
    </Int>
    </div>
    <div class="boxanim">
    <Box1 id="anim">
        <img  src={log} alt="log" />
        <br />
        <br />
        <p>Web development</p>
        <ul>
            <li>Frontend technology: React JS</li>
            <li>Backend Technology: Django</li>
        </ul>
        
    </Box1>
    <Box2 id="anim">
        <img  src={log} alt="log" />
        <br />
        <br />
        <p>Programming languages</p>
        <ul>
            <li>Pyhton</li>
            <li>Java</li>
        </ul>
    </Box2>
    <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
    </div>
    </div>
)

export default Intro