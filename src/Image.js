import React from 'react'
import logo from './media/profile.png'
import styled from 'styled-components'

const Panel = styled.div`
    

    img{
        border: 5px solid black;
        height: 200px;
        width: 120px;
        border-radius: 20px;
    }
`;

function Image() {

    return (
        <Panel>
        <img src={logo} alt="logo" />
        </Panel>
    )
}

export default Image;