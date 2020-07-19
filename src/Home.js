import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  margin-top: 1em;
  margin-left: 15em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  font-family: 'Sriracha', cursive;
  font-size: 20px;


  @media screen and (max-width:1081px){
    margin-top: 5em;
  margin-left: 1em;
  margin-right: 1em;
  font-family: 'Sriracha', cursive;
  font-size: 15px;
  }
`;

export const Home = (props) => (
  <GridWrapper>
    <p>In quest of career enrichment with a growth oriented organisation of high repute.</p>
    <p>Welcome to my portfolio</p>
    <p>Feel free to navigate to other pages though the side navigation bar</p>
    <p>You can contact me via whatsapp,facebook,instagram,linkedin</p>
    <p>Contact number: 8791225390,  8077220024</p>
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
  </GridWrapper>
)