import { useState } from 'react'
import Product from './Product'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<>

    <h1>Hello there...</h1>
   <h3> <Product name = "IPhone -14"/></h3>
   <h3> <Product name = "DSLR-Camera"/></h3>
    </>
  )
}

export default App
