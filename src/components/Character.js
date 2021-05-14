// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Characters = styled.div`
text-align: center;
align-items: center;
display:flex;
flex-wrap: wrap;
justify-content: space-around;
`
export default function styleCharacters ({info}) {
    return(
        <styleCharacters>
            <p>Name: {info.name} </p>
            <p>Weight: {info.mass}</p>
            <p>Gender: {info.gender}</p>
            <p>Date of Birth: {info.birth_year}</p>
        </styleCharacters>
    )
}

