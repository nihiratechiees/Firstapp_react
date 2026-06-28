import React from "react";

const Childproduct = ({name,price,add}) => {
    console.log('child prouct rendered')
    return ( 
        <div className="card" style={{"width":"200px"}}>
           <h3>{name}</h3>
           <span>${price}</span>
           <button onClick={add} className="btn btn-primary">Buy Now</button>
        </div>
     );
}
 
export default React.memo(Childproduct);