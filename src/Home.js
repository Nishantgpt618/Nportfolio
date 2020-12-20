import React from 'react';
import styled from 'styled-components';







const GridWrapper = styled.div`
 @media screen and (min-width:1081px){
  margin-top: 1em;
  margin-left: 15em;
  margin-right: 6em;
  font-family: 'Sriracha', cursive;

  li {
    justify-content: left;
    margin-left: 380px;
    text-align: left;
  }
  
 }


  @media screen and (max-width:1081px){
   
  margin-left: 1em;
  margin-right: 1em;
  font-family: 'Sriracha', cursive;
  font-size: 15px;
  a{
    color: black;
  }
  }

  
`;

export const Home = (props) => (


  <GridWrapper>
    <p>In quest of career enrichment with a growth oriented organisation of high repute.</p>
    <p>Welcome to my portfolio</p>
    <p>Feel free to navigate to other pages though the navigation bar</p>
    <p>You can contact me via whatsapp,facebook,instagram,linkedin</p>
    <p>Contact number: 8791225390,  8077220024</p>
    <h1>Deployments:</h1>
    <ul>
      <li>Todo React App <a href="https://todo-app-ng.web.app/">Redirect link</a></li>
      <li>School Cart <a href="https://sheltered-thicket-76544.herokuapp.com">Redirect Link</a></li>
      <li>Emaily <a href="https://rocky-gorge-45724.herokuapp.com/">Redirect Link</a></li>
    </ul>
  </GridWrapper>
)