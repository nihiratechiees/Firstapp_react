import { useContext } from "react";
import Component3 from "./Component3";
import { UserContext } from "./Parentproduct";

const Component2 = () => {
    const {username}=useContext(UserContext)
    return ( 
        <div className="card">
            <h1>Component2 - {username}</h1>
            <Component3 ></Component3>
        </div>
     );
}
 
export default Component2;