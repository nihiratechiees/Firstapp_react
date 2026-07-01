import { useContext } from "react";
import { ThemeContext, UserContext } from "./Parentproduct";

const Component3 = () => {
    const {username}=useContext(UserContext); 
    const {theme}=useContext(ThemeContext);
    return ( 
        <div className="card">
        <div className={theme}>
            <h1>Component 3</h1>
            <span>{username}</span>
        </div>
        </div>
     );
}
 
export default Component3;