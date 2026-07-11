import { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + (action.payload || 1) }
    case 'decrement':
      return { count: state.count - (action.payload || 1) }
    case 'reset':
      return initialState
    default:
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='container text-center mt-5'>
      <h1 className='mb-3'>Counter</h1>
      <h2 className='mb-4'>{state.count}</h2>
      <div className='d-flex justify-content-center gap-2 flex-wrap'>
        <button className='btn btn-danger' onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
          -1
        </button>
        <button className='btn btn-outline-danger' onClick={() => dispatch({ type: 'decrement', payload: 5 })}>
          -5
        </button>
        <button className='btn btn-secondary' onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
        <button className='btn btn-outline-success' onClick={() => dispatch({ type: 'increment', payload: 5 })}>
          +5
        </button>
        <button className='btn btn-success' onClick={() => dispatch({ type: 'increment', payload: 1 })}>
          +1
        </button>
      </div>
    </div>
  )
}

export default Counter