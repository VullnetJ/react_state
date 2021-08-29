import React from 'react'

export class CounterButtonCB extends React.Component {
    
    render() {
        const {nO, onIncrement} = this.props;
        return (
            <>
            <p>You've clicked button {nO} times</p>
            <button onClick={onIncrement}>Click to count</button>
            </>
        )
    }
}