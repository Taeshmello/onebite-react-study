import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("off");
  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={()=>{
        
        if(light == "on"){
          setLight("off")
        } else{
          setLight("on")
        }
      }}>
      {light === "on" ? "끄기":"켜기"}
      
      </button>
    </div>
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count+1)
      
    }}>+</button>
    </div>
    </>
  )
}

export default App
