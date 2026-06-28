import { useCallback, useState } from "react";
import Childproduct from "./Childproduct";
import Producttitle from "./ProductTitle";

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
        <div className={theme}>
            <button onClick={toggleTheme} className="btn btn-info">Change theme</button>
            <Producttitle></Producttitle>
            <h3>Cart value is : {cart}</h3>
            <Childproduct add={addproduct} name="Cricket bat" price={100}></Childproduct>
            <Childproduct add={addproduct} name="Cricket ball" price={10}></Childproduct>
        </div>
    );
}

export default Parentproduct;