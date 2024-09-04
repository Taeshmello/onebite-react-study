import { useState } from "react";

//컴포넌트가 리렌더링 되는 세가지 조건
// 1. 자신이 관리하는 state의 값이 변화할 때
// 2. 자신이 제공받는 props의 값이 변경되었을 때
// 3. 부모 컴포넌트가 리랜더링되면 자식 컴포넌트도 리랜더링이 된다.

const Blub = () => {
    const [light, setLight] = useState("off");
    return(
      <div>
        {light == "on" ? (<h1 style={
          {backgroundColor:'yellow'}
        }>on</h1>
      ):(
      <h1 style={
        {backgroundColor:"gray"}
        }>off</h1>)}
        
        <div>
        <button onClick={()=>{
          if(light == "off"){
            setLight("on")
          } else{
            setLight("off")
          }
        }}>
        {light === "off" ? "켜기":"끄기"}
        
        </button>
      </div>
      </div>
  
      
    )
  }

  export default Blub;