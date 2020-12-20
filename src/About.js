import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
 @media screen and (min-width:1081px){
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 6em;
  font-size: 1.1em;
  

  h3{
    text-align: center;
  font-size: 2em;
  font-family: cursive;
  }
  li{
    text-align: center;
  }

  
 }

  @media screen and (max-width:1081px){

  margin-left: 5em;
  margin-right: 5em;
  padding-top: 50px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  text-align: left;
  

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
    <p><h3>Hometown:</h3> Puranpur ,District Pilibhit<br /><br />
    <h3>Primary Email:</h3> nishantgpt618@gmail.com<br /><br />
    <h3>Mobile No:</h3> 8077220024,8791225390<br /><br />
    <h3>D.O.B:</h3> 23rd February 1996<br /><br />
    <h3>10th CGPA:</h3> 6.8 CGPA<br /><br />
    <h3>12th Percentage:</h3> 64%<br /><br />
    <h3>Graduation details:</h3> B.tech (mechanical Engineering)<br /><br />
    
      <h3>College:</h3> Moradabad Institute Of Technology
      <h3>Affiliation:</h3> Abdul Kalam Technical University
      <h3>Stream:</h3>Mechanical
      <h3>Percentage:</h3> 64%
    <br />
    
    
    
    </p>
    
  </GridWrapper>
)