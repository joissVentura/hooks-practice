import React from 'react'
import { CounterApp } from './useReducer/CounterApp'
import { Counter } from './usestate/Counter'

export const App = () => {
  
  document.title = 'App con hooks'

  return (
    <>
      <Counter />
      <hr />
      <CounterApp />
    </>
  )
}
export default App;
