import React from 'react';

//  function Greeting() {
//const Greeting = (props) => {
    //const {name, numberOfMessages} = props; // destructuring props. 

const Greeting = ({name, numberOfMessages, person}) => {
    // if(!name) {
    //     return null;
    // }
    
    let isMorning = (new Date()).getHours() < 12;
    // console.log(name, numberOfMessages);
    let greetingHeader = isMorning
        ? <h3>Good Morning {name}</h3>
        : <h3>Good Evening {name}</h3>
    return (
        <>
            {greetingHeader} 
            {numberOfMessages ===0 
            ? null 
            : <p>You have {numberOfMessages} new Messages</p>}

        </>
    )
        
}
export default Greeting;