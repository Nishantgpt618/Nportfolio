import React from 'react';
import styled from 'styled-components';
import { Card,Button } from 'react-bootstrap';

const deployments = [ {name: 'Todo React App',
                      href: 'https://todo-app-ng.web.app/'},
                    { name: 'School_Cart',
                      href:  'https://sheltered-thicket-76544.herokuapp.com'},
                    { name: 'Emaily',
                      href: 'https://rocky-gorge-45724.herokuapp.com/'}]



const GridWrapper = styled.div`
 @media screen and (min-width:1081px){
  margin-top: 1em;
  margin-left: 20em;
  margin-right: 6em;
  font-size: 1.3em;
  font-family: 'Sriracha', cursive;
  justify-content: left;

  li {
    
    margin-left: 380px;
    text-align: left;
  }

  .row{
    justify-content: center;
  }

  .deploy{
    margin-left: 5px;
    margin-right: 5px;
    background-color: slategray;
    
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
  .row{
    justify-content: center;
  }

  .deploy{
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    

    
  }
  }

  
`;

export const Home = (props) => (


  <GridWrapper>
    <p>Welcome to my portfolio</p>
    <p>Feel free to navigate to other pages though the navigation bar</p>
    <p>You can contact me via whatsapp,facebook,instagram,linkedin</p>
    <p>Contact number: 8791225390,  8077220024</p>
    <hr />
    <h1>Deployments:</h1>
    <hr />
    <div className="row container-fliud">
      { deployments.map((title,index) => (
          <Card key={index} className="deploy" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{title.name}</Card.Title>
            <Button href={title.href} variant="primary">Redirect Link</Button>
          </Card.Body>
        </Card>
        
      ))}
    
    </div>
    
  </GridWrapper>
)