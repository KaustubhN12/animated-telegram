import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo} from '../Redux/action'
const TodoInput = () => {

    const [todo,setTodo] = useState('')
    const dispatch = useDispatch()

      const todos = useSelector((store)=>store.todos)
    const handleChange=(e)=>{
        setTodo(e.target.value)
        console.log(todo)
    }
    const handleSubmit=()=>{
        const obj ={
         task:todo,
         status:false
        }
   dispatch(addTodo(obj))
   console.log(todos)
    }
 
  return (
    <div>TodoInput

        <input type="text" value={todo} placeholder='Enter Todo' onChange={(e)=>handleChange(e)}/>
        <button onClick={handleSubmit}>Submit New Todo</button>
    </div>
  )
}

export default TodoInput