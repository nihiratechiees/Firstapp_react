export const INCREMENT='increment'
export const DECREMENT='decrement'
export const RESET='reset'

export const increment = (payload=1) => ({ type: INCREMENT,payload })
export const decrement = (payload=1) => ({ type: DECREMENT,payload })
export const reset = () => ({ type: RESET })