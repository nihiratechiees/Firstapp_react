import { decrement, increment, reset } from "./Counteraction";

const Counterbutton = ({dispatch}) => {
    return ( 
        <div className='d-flex justify-content-center gap-2 flex-wrap'>
          
          <button className="btn btn-success" onClick={()=>dispatch(increment(1))}>+</button>
           <button className="btn btn-outline-success" onClick={()=>dispatch(increment(5))}>+5</button>
           <button className="btn btn-secondary" onClick={()=>dispatch(reset())}>Reset</button>
            <button className="btn btn-outline-danger" onClick={()=>dispatch(decrement(5))}>-5</button>
            <button className="btn btn-danger" onClick={()=>dispatch(decrement(1))}>-</button>

        </div>
     );
}
 
export default Counterbutton;