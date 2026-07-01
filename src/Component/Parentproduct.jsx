import { createContext, useCallback, useState } from "react";
import Childproduct from "./Childproduct";
import Producttitle from "./ProductTitle";
import Component1 from "./Component1";

export const UserContext = createContext();
export const ThemeContext = createContext();

const Parentproduct = () => {
    const [theme, setTheme] = useState('light');
    const [cart, setCart] = useState(0);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    // const addproduct = () => {
    //     setCart(cart + 1);
    // }

    const addproduct = useCallback(() => {
        setCart(cart + 1);
    }, [cart])

    return (
        <ThemeContext.Provider value={{theme:theme}}>
        <UserContext.Provider value={{username:'Nihira Techiees'}}>
            <div className={theme}>
                <button onClick={toggleTheme} className="btn btn-info">Change theme</button>
                <Producttitle></Producttitle>
                <h3>Cart value is : {cart}</h3>
                <Childproduct add={addproduct} name="Cricket bat" price={100}></Childproduct>
                <Childproduct add={addproduct} name="Cricket ball" price={10}></Childproduct>

                <Component1></Component1>
            </div>
        </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

export default Parentproduct;