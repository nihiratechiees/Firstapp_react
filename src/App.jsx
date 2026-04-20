import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const title="Welcome to React 19.2"

  return (
   <h2>{title}</h2>
  )
}

export default App
