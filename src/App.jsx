import { useState } from "react"
function App() {
  const[counter,setcounter]=useState(50)
  //let counter =50
  const addvalue=()=>{
    console.log(counter)
    setcounter(counter+1)
  }
  return (
    <>
    <h1>chai aur code</h1>
    <h2>counter value :{counter}</h2>
    <button
    onClick={addvalue}
    >add value{counter}</button>
    <button>remove value{counter}</button>
    </>
  )
}

export default App
