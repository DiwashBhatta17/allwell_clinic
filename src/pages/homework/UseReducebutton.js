import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react';

let initialState = {count: 1,
name:'hELLO', };


function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT": 
            return {count: state.count + 1}

        case "DECREMENT":
            return {count: state.count - 1}

        default:
            return "hELL";
    }

   }

function UseReducebutton() {
   
    const [state, dispatch] = useReducer(reducer, initialState);
    

  


  return (
    <div>
        <button onClick={()=>dispatch({type: "INCREMENT"})}>Positive</button>
        <p>HELLO {state.count} hELLLO</p>
        <button  onClick={()=>dispatch({type: "DECREMENT"})}>Negative</button>
      
    </div>
  )
}

export default UseReducebutton;
