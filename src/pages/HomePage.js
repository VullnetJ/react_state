
import React from 'react';
import Greeting from './Greeting';

export const HomePage = () => {
    return (
        <>
        <h1>The Home Page</h1>
        <Greeting name="Vullnet" numberOfMessages={10} />
    </>
    )  
}