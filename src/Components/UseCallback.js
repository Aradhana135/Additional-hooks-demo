import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const UseCallback = () => {
    const[count,setCount]=useState(0)
    const[todos,setTodos]=useState([])
    const Increment=()=>{
        setCount((c)=>c+1)
    }

const addTodo=useCallback(()=>{
    setTodos((t)=>[...t,"New Todos"])
},[todos])
//Todos component will only re-render when the todos prop changes.
  return (
    <>
    <Todos todos={todos} addTodo={addTodo}/>
    <hr/>
    <div>
        Count:{count}
    <button onClick={Increment} >+</button>
    </div>
    </>
  )
}

export default UseCallback