import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const[count,setCount]=useState(0);

   const increment=()=>{
    setCount(count+1)
  }
  return (
    <div className='main-container'>
    <div>
    <h1 className='heading'>
      The Btton has been clicked <span className='counter'>{count}</span> Times
    </h1>

     </div>
     <button type="button" className='btn' onClick={increment}>Click me!</button>
    </div>
  )
}

export default App
