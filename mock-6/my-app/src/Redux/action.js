import { ADD_TODO } from "./actiontype"

export const saveTodo = (payload)=>{

return {
    type:ADD_TODO,
    payload
}

}

export const addTodo =(payload)=>(dispatch)=>{
    
   dispatch(saveTodo(payload))


}