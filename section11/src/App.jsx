import { useState, useRef, useReducer, useCallback} from "react";
import Header from "./components/Header";
import { Editor } from "./components/Editor";
import { List } from "./components/List";
import "./App.css";


//useReducer : 컴포넌트 내부의 새로운 State를 생성하는 React Hook
// 모든 useState는 useReducer로 대체 가능.
// useState와의 차이점: 상태관리 코드를 외부로 분리할 수 있음.

const mockData = [
  
];

function reducer(state,action){
  switch(action.type){
    case 'CREATE': return [action.data, ...state]
    case 'UPDATE': return state.map((item)=>item.id === action.targetId? {...item, isDone: !item.isDone}:item)
    case 'DELETE': return state.filter((item)=>item.id !== action.targetId)
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);


  const idRef = useRef(0);

  const onCreate = useCallback((content) => {
    dispatch({
      type:"CREATE",
      data: {
        id:idRef.current++,
        isDone:false,
        content: content, 
        date: new Date().getTime
      }
    })
  },[]);


  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId:targetId,
    
    })
  },[]);


 const onDelete = useCallback((targetId)=>{
    dispatch({
      type:"DELETE",
      targetId: targetId,
    })
  },[]);



  







  return (
    <div className="Container">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos = {todos} onUpdate = {onUpdate} onDelete = {onDelete}/>

    </div>
  );
}

export default App;
