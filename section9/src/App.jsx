import { Viewer } from "./components/Viewer";
import { Controller } from "./components/Controller";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import EvenNum from "./components/EvenNum";
// Side Effect : 리액트에선 "부수적인 효과, "파생되는 효과"로 해석된다.
// React 컴포넌트의 Side Effect: 컴포넌트의 동작에 따라 파생되는 여러 효과이다.



function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  //1. Mount: 컴포넌트 생성(탄생)
  useEffect(()=>{
    console.log("Mount")
  },[]) // callback 함수는 deps의 값이 변할 때 실행되기 때문에 컴포넌트가 처음 mount 될 때 이후론 실행되지 않는다.
        // 따라서 컴포넌트가 마운트 되었을때만 실행시키고 싶다면 deps에 아무 값도 넣지 않으면 된다.
         
  //2. Update: 리렌더링(변화)
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true
      return;
    }
    console.log("update")
  })
  //3. UnMount: 컴포넌트 정리(죽음)


  
  //배열에 있는 count의 값이 바뀔때 마다 side effect로 콜백 함수가 실행되어 콘솔이 찍힌다.
  //배열에 무엇을 넣느냐에 따라 다르게 동작하기에 이 배열을 "의존성 배열"(deps)이라 부른다.

  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 ==0 ? <EvenNum/> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App; 