
import React, {useState} from 'react'
import {  useLocation,  } from 'react-router';
import {Counter, } from '../Counter';
import {parse} from 'query-string';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { DisplayIf } from '../DisplayIf';

export const CounterButtonPage = () => {
    // const {name} = useParams();
    
    
    
    const location = useLocation();
    
    console.log(parse(location.search));

    // const history = useHistory();
    // console.log(history); 

    // const queryString = require('query-string');
    // console.log(location.search)

    const startingValue = parse(location.search).startingValue || 0;
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
    const [hideMessage, setHideMessage] = useState(false);
        
    const increment = () => setNumberOfClicks(numberOfClicks + 1);
//   if (numberOfClicks ===6) {
//     setNumberOfClicks(0);
//   }
  return (
        <>
        
        <h1> Counter Button Page</h1>
        <DisplayIf condition={!hideMessage && numberOfClicks >= 10} >
          <CongratulationsMessage  
            threshold={5} 
            onHide={() => setHideMessage(true)}
            />
        </DisplayIf>
      
      <Counter  onIncrement={increment} nO={numberOfClicks}/>
    </>
  );
}