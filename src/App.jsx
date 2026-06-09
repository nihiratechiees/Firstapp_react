import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MenuHeader from './Component/MenuHaeder'
import AppFooter from './Component/AppFooter'
import Products from './Component/Product'
import imgBat from './assets/bat.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  let title = "Welcome to React 19.2"

  const [title1, setTitle] = useState("Welcome to React 19.2");
  const [count, setCount] = useState(0);

  const addproduct = ({ name }) => {
    alert('Product added to cart :' + name)
    setCount(count + 1);
  }

  const updatetitle = (value) => {
    title = value;
    console.log(title);
  }

  useEffect(() => {
    console.log("use effect called");
  }, [count, title1]);


  return (
    <>
      <MenuHeader></MenuHeader>
      <h2>{title1}</h2>
      <h2>{count} - products added to cart</h2>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='form-group'>
<input className='form-control' onChange={(e) => setTitle(e.target.value)}></input>
          </div>
        </div>
      </div>

      
      <Products name="MRF Cricket Bat" description="Standard bat" price="10" prodimage={imgBat} onAdd={addproduct} show={true}></Products>
      <Products name="Cricket Ball" price="5" onAdd={addproduct} show={true}></Products>
      <Products name="Cricket Pad" price={20} onAdd={addproduct} show={true}></Products>
      <AppFooter></AppFooter>
    </>

  )
}

export default App
