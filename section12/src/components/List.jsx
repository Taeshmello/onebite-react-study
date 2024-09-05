import { useState, useMemo } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

export const List = ({todos, onUpdate , onDelete}) => {
  const [search, setSearch] = useState("")

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilterdData = () => {
    if(search === ""){
      return todos
    }
    return(
      todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()))
    )
  }

  


  const {totalCount, doneCount, notdoneCount} = useMemo(()=>{
    const getAnalyzedData = () => {
      console.log(`getAnalyzedData 호출`)
      const totalCount = todos.length;
      const doneCount = todos.filter((todo)=>todos.isDone).length;
      const notdoneCount = totalCount - doneCount;
  
      return {
        totalCount,
        doneCount,
        notdoneCount
      }
    }
  },[todos])

  // const {totalCount, doneCount, notdoneCount} = getAnalyzedData()

 const filteredTodos =  getFilterdData();
  return (
    <div className="List">
      <h4>Todo List🌱</h4>

      <div>total:{totalCount}</div>
      <div>done:{doneCount}</div>
      <div>notDone:{notdoneCount}</div>
      <input value={search} 
      onChange={onChangeSearch} 
      placeholder="검색어를 입력하세요." />
      <div className="todos_wrapper">
       {filteredTodos.map((todo)=>{
      return <TodoItem key={todo.id} {...todo} onUpdate = {onUpdate} onDelete = {onDelete}/>
       })}
      </div>
    </div>
  );
};
