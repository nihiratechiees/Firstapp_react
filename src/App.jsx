import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MenuHeader from './Component/MenuHaeder'
import AppFooter from './Component/AppFooter'

function App() {
  const [count, setCount] = useState(0)
  const title = "Welcome to React 19.2"

  return (
    <>
      <MenuHeader></MenuHeader>
      <h2>{title}</h2>
      <AppFooter></AppFooter>
    </>

  )
}

export default App
