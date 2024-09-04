import './App.css'
import { useState } from 'react'

function App() {
  const userInfo = {
    name: "엄준식",
    isLogin : "로그인됨",
  }
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("off");
  const [login, setLogin] = useState(userInfo.isLogin)

  
  return (
    <>
    <div>
    <h1>{login}</h1>
    <button onClick={()=>{
      if(login === "로그인됨"){
        setLogin("로그아웃됨")
      }else{
        setLogin("로그인됨")
      }
    }}>{login == "로그인됨" ? "로그아웃하기":"로그인하기"}</button>
    </div>
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
