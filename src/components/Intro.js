import React from 'react'
import log from './media/hexagon.png'
import styled from 'styled-components'
import './css/Intr.css'



const Int = styled.div`
    margin-top: 1em;
    margin-left: 15em;
    margin-right: 6em;
    display: grid;
    width: 100%;
    font-size: 20px;
    color: black;
    font-family: cursive;
        
`;

const Box1 = styled.div`
    width: 300px;
    height: 200px;
    border: solid 1px black;
    margin-left: 20em;
    margin-top: 2em;
    background: grey;
    color: white;

   


    img {
        margin-top: -34px;
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

`;

const Intro = () => (
    <div>
    <div class="list">
    <Int>
        <p>Glad that i am here at this point,after consuming all about the market scenario,
        I have to switch my chosen field of mechanical to IT. Struggling to earn a better carrier just
        not to fullfil my own dream but all for my family.
        It's gonna too hard to survive  and make up with the scope i have chosen but after all the dream i saw with my open eyes 
        will come True one day.</p>
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
    </div>
    </div>
)

export default Intro