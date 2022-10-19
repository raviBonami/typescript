
import React,{useState, useReducer} from 'react'

type CounterStateProps = {    
    count : number
}

type UpdateAction = {
    type: "increment" | "decrement",
    payload: number
}

type ResetAction = {
    type: "reset"
}

// type CounterActionProps = {
//     type: string,
//     // type: 'increment' | 'decrement'
//     payload: number
// }

type CounterActionProps = UpdateAction | ResetAction
// This is here discriminated unions - Recommended approach
// in using reducers


const initialState = {count : 0}

function reducer (state:CounterStateProps, action:CounterActionProps){
    switch(action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({type: 'increment', payload:10})} >Increment 10</button>
        <button onClick={() => dispatch({type: 'decrement', payload: 5})} >Decrement 5</button>
    </div>
  )
}
