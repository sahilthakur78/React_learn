import { useState } from 'react'
import './App.css'
function App() {
  const [color, setcolor] = useState("white")

  return (
    <>
     <div className="container"style={{ backgroundColor:color }}>
    <div className="btnBox">
      <button
      onClick={()=>setcolor("red")} 
      >red</button>
      <button
       onClick={()=>setcolor("yellow")} 
       >yellow</button>
      <button 
      onClick={()=>setcolor("orange")} 
       >orange</button>
      <button 
      onClick={()=>setcolor("black")}
       >black</button>
      <button 
      onClick={()=>setcolor("pink")} 
      >pink</button>
      <button 
      onClick={()=>setcolor("brown")} 
      >brown</button>
    </div>
  </div>
    </>
  )
}

export default App
