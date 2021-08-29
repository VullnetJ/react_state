
import React from 'react'

export  class CongratulationsMessageCB extends React.Component {
    render() {
        const {threshold, onHide} = this.props;
        return (
            <>
            <h2>Congratulations! You've reached {threshold} number of clicks </h2> 
            <button onClick={onHide}>Hide</button>
            </>
        );
    }
}