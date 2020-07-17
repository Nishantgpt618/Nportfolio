import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  margin-top: 1em;
  margin-left: 20em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  text-align: left;
  font-family: cursive;

  P{
    font-size: 20px;
  }
`;

export const About = () => (
  <GridWrapper>
    <p><h1>Hometown:</h1> Puranpur ,District Pilibhit<br /><br />
    <h1>Primary Email:</h1> nishantgpt618@gmail.com<br /><br />
    <h1>Mobile No:</h1> 8077220024,8791225390<br /><br />
    <h1>D.O.B:</h1> 23rd February 1996<br /><br />
    <h1>10th CGPA:</h1> 6.8 CGPA<br /><br />
    <h1>12th Percentage:</h1> 64%<br /><br />
    <h1>Graduation details:</h1> <br /><br />
    <ul>
      <li><h1>College:</h1> Moradabad Institute Of Technology</li>
      <li><h1>Stream:</h1>Mechanical</li>
      <li><h1>Percentage:</h1> 64%</li>
    </ul>
    <br />

    
    </p>
    
  </GridWrapper>
)