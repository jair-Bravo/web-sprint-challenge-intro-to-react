// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Character = styled.div`
background-color: grey;
text-align: center;
align-items: center;
display:flex;
flex-wrap: wrap;
justify-content: space-around;
`
export default function styledCharacter ({info}) {
    return(
        <styledCharacter>
            <p>Name: {info.name} </p>
            <p>Weight: {info.mass}</p>
            <p>Gender: {info.gender}</p>
            <p>Date of Birth: {info.birth_year}</p>
        </styledCharacter>
    )
}

