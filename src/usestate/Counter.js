import React, { useState } from 'react'

export const Counter = () => {

    const init = 0;

    const [counter, setCounter] = useState(init);

    const incrementar = (e) => {
        setCounter(counter + 1);
        console.log(e)
    }
    const decrementar = (e) => {
        setCounter(counter - 1);
        console.log(e);
    }
    const reiniciar = () => {
        setCounter(init);
    }
    
    return (
        <div className="container mt-4">
            <h3>Counter: {counter}</h3>
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
