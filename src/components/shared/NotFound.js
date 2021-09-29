import React from 'react';
import styled from 'styled-components';

export const Center = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    img {
        width: 300px;
        height: 200px;
    }
`;

const NotFound = () => {
    return (
        <Center>
            <h2>The page you are looking for is removed or moved somewhere</h2>
        </Center>
    );
}

export default NotFound;