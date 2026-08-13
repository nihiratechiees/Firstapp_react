
export default function reducer(state,action){
    debugger;
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return {count: 0}
        default:
            return state
    }
}