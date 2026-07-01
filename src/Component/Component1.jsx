import { useContext } from "react";
import Component2 from "./Component2";
import { ThemeContext } from "./Parentproduct";

const Component1 = () => {
    const {theme}=useContext(ThemeContext);
    return ( 
        <div className="card">
            <h1 className={theme}>Component 1</h1>
            <Component2 ></Component2>
        </div>
     );
}
 
export default Component1;