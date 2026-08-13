import { useReducer } from "react"
import Counterbutton from "./Counter/CounterButton"
import Counterview from "./Counter/CounterView"
import { initialState } from "./Counter/counterState"
import reducer from "./Counter/counterReducer"

const Counter = () => {
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div className='container text-center mt-5'>
      <h1 className='mb-3'>Counter</h1>
      <Counterbutton dispatch={dispatch}></Counterbutton>
      <Counterview count={state.count}></Counterview>
    </div>
  )
}

export default Counter