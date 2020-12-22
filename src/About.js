import React from 'react';
import styled from 'styled-components';
import me from './media/me1.png';

const GridWrapper = styled.div`
 @media screen and (min-width:1081px){
  margin-top: 1em;
  margin-left: 20em;
  margin-right: 6em;
  font-size: 1.2em;
  display: flex;
  text-align: left;
  

  h3{
    text-align: center;
  font-size: 2em;
  font-family: cursive;
  }
  li{
    text-align: center;
  }
  p,img{
    width: 700px;
  }

  
 }

  @media screen and (max-width:1081px){

  margin-left: 5em;
  margin-right: 5em;
  padding-top: 50px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  text-align: left;

  #me{
    display: none;
  }
  

  P{
    font-size: 15px;
    
  }
  h3{
    font-size: 25px;
    color: brown;
    font-family: cursive;
  }
  }

`;

export const About = () => (
  <GridWrapper>
    
    
    <p><h1>About NG</h1><br/>Hey hey hey! I'm Nishant <br/>
    <br/>
    I a'm a self learner<br/>
    <br/>
    I started to develop a curosity about web technologies while pursuing my Graduation,
    irrespective of my specification in B.tech(Mechanical Engineering) my intrest rised towards Web development.<br/><br/>
    I started with all basic courses available free on Udemy, Coursera , Youtube and got all basics of HTML, Css, JavaScript.<br/>
    My curosity made me dig more and more and in back 2019 , I started with ReactJS .
    My skills made me employable, I got a job with AMPM solutions Ltd. as a frontend developer.
    I learned a lot there...they made me a lot more confident on my skills.
    Making me ready to face the challenges. 
    
    </p>
    <img id="me" src={me} alt="me" />
  </GridWrapper>
)