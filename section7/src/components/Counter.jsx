import { useState } from "react";
//컴포넌트가 리렌더링 되는 세가지 조건
// 1. 자신이 관리하는 state의 값이 변화할 때
// 2. 자신이 제공받는 props의 값이 변경되었을 때
// 3. 부모 컴포넌트가 리랜더링되면 자식 컴포넌트도 리랜더링이 된다.

const Counter = () => {
    const [count, setCount] = useState(0);
    return(
      <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
        
      }}>+</button>
      </div>
    )
  }
  

  export default Counter;