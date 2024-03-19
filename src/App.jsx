import { useState } from 'react'
import Product from './Product'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <h1>Hello there...</h1><Product />
    </>
  )
}

export default App
