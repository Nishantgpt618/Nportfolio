import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
@media screen and (min-width:1081px){
  margin-top: 1em;
  margin-left: 20em;
  margin-right: 6em;
  text-align: left;
  color: black;
  width: 50%
  font-size: 1.1em;


  h1{
    text-align: center;
    font-family: cursive;
    color: black;
    font-size: 2em;
  }
}

  @media screen and (max-width:1081px){
    padding-top: 50px;
  margin-left: 5em;
  margin-right: 5em;
  text-align: left;
  color: black;
  width: 70%
  font-size: 10px;

  h1{
    font-size: 15px;
    text-align: center;
    font-family: cursive;
    color: brown;
  }

  ul {
    margin-left: -30px;
  }

  }
`;

export const Timeline = () => (
  <Wrapper>
    <p>
    <h1>Total Professional Experience:</h1><br />
    <ul>
      <li>One year total experience as frontend developer trainee with AMPM Solution Ltd.</li>
    </ul><br />
    <h1>Company Profile:</h1><br/>
      <p> AMPM Solutions represents the coming generation in effectual and robust online marketing.
       We are a Full service digital marketing agency having expertise in understanding web UI, inbound marketing and social media.
      Combining these with technology to enrich customer experience and to create strong influence on target audiences.
      Thereby raising awareness, advocacy, engagement and loyalty towards your brand, especially increasing revenue with low expense.</p>
      <br />
    <div className="visible">
    <h1>Job Responsiblities:</h1><br />
    <ul>
      <li>Developing new user-facing features using React.js.</li>
      <li>Building reusable components and front-end libraries for future use.</li>
      <li>Optimizing components for maximum performance across a vast array of web-capable devices and browsers.</li>
      <li>Meeting with the development team to discuss user interface ideas and applications..</li>
      <li>Developing and implementing highly-responsive user interface components using React concept.</li>
      <li>Troubleshooting interface software and debugging application codes.</li>
    </ul>
    </div><br />
    </p>
  </Wrapper>
)