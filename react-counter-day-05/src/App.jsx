import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(() => Number(localStorage.getItem("count")) || 0)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")
  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  
  return (
    <>
      <h1>COUNTER APP</h1>
      <h2>Count: {count}</h2>
      <h3>{theme}</h3>
      <button onClick={() => setCount(prev => prev+1)}>Increase</button>
      <button onClick={() => setCount(prev => prev-1)}>Decrease</button>
      <button onClick={() => setTheme(theme==="light"?"dark":"light")}>Toggle Theme</button>
    </>
  )
}

export default App
