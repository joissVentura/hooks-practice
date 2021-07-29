import React, { useReducer } from 'react'
import { ActionTypes as Type } from './ActionTypes';
import { CounterReducer } from './CounterReducer'

export const CounterApp = () => {

    const initialState = 0;

    const [counter, dispatch] = useReducer(CounterReducer, initialState)

    const incrementar = () => {
        const action = {
            type: Type.increment
        }
        dispatch(action)
    }
    const decrementar = () => {
        const action = {
            type: Type.decrement
        }
        dispatch(action)
    }
    const reiniciar = () =>{
        const action = {
            type: Type.reset,
            payload: initialState
        }
        dispatch(action)
    }
    return (
        <div className="container mt-4">
            <h3>Counter con useReducer: {counter}</h3>
            <div className="row col-6 d-flex justify-content-between">
                <button 
                    className="btn btn-outline-primary col-2" onClick = { () => incrementar()}>
                    +1
                </button>
                <button 
                    className="btn btn-outline-success col-3" onClick = {() => reiniciar() }>
                    Reset
                </button>
                <button 
                    className="btn btn-outline-danger col-2" onClick = { () =>  decrementar() }>
                    -1
                </button>
            </div>
        </div>
    )
}

