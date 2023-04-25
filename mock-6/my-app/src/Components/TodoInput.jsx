import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo} from '../Redux/action'
import { Button } from '@chakra-ui/react'
const TodoInput = () => {

    const [todo,setTodo] = useState('')
    const dispatch = useDispatch()

      const todos = useSelector((store)=>store.todos)
    const handleChange=(e)=>{
        setTodo(e.target.value)
        // console.log(todo)
    }
    const handleSubmit=()=>{
        const obj ={
            id:Date.now(),
         task:todo,
         status:true
        }
   dispatch(addTodo(obj))
   console.log(todos)
   setTodo("")
    }
 
  return (
    <div>TodoInput

        <input type="text" value={todo} placeholder='Enter Todo' onChange={(e)=>handleChange(e)}/>
        <Button onClick={handleSubmit}>Submit New Todo</Button>
    </div>
  )
}

export default TodoInput