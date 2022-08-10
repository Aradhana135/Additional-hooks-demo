import React, { useState } from 'react'
import Todos from './Todos'

const UseMemodemo = () => {
    const[count,setCount]=useState(0)
    const[todos,setTodos]=useState([])
    const Increment=()=>{
        setCount((c)=>c+1)
    }

const addTodo=()=>{
    setTodos((t)=>[...t,"New Todos"])
}
//Todos component re-renders even when the todos do not change.
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

export default UseMemodemo