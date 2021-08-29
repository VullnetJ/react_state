import React, {useEffect} from 'react';


export const Counter = ({onIncrement, nO}) => {
    useEffect(() => {
        console.log('useEffect function called');
        return () => {
            console.log('unmounting!');
        }
    }, [nO]);

    return (
        <>
        <p>You've clicked button {nO} times</p>
        <button onClick={onIncrement}>Click to count</button>
        </>
    ) 
}