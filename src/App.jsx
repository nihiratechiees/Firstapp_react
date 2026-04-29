import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MenuHeader from './Component/MenuHaeder'
import AppFooter from './Component/AppFooter'
import Products from './Component/Product'
import imgBat from './assets/bat.jpg'


function App() {
  const [count, setCount] = useState(0)
  const title = "Welcome to React 19.2"

  const addproduct=({name})=>{
    alert('Product added to cart :' + name)
  }

  return (
    <>
      <MenuHeader></MenuHeader>
      <h2>{title}</h2>
      <Products name="MRF Cricket Bat" description="Standard bat" price="10" prodimage={imgBat} onAdd={addproduct}></Products>
      <Products name="Cricket Ball" price="5" onAdd={addproduct}></Products>
      <Products name="Cricket Pad" price={20} onAdd={addproduct}></Products>
      <AppFooter></AppFooter>
    </>

  )
}

export default App
