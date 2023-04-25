import { ADD_TODO, CHANGE_STATUS, DEL_TODO, EDIT_TODO } from "./actiontype"

export const saveTodo = (payload)=>{

return {
    type:ADD_TODO,
    payload
}



}


export const changeStatus=(payload)=>{
    return {
        type:CHANGE_STATUS,
        payload
    }
}



export const deltodo=(payload)=>{
    return{
        type:DEL_TODO,
        payload
    }
}


export const edit =(payload)=>{
// console.log(payload)
     return {
        type:EDIT_TODO,
        payload
     }
}






export const addTodo =(payload)=>(dispatch)=>{
  
   dispatch(saveTodo(payload))


}

export const chngstatusTodo =(payload)=>(dispatch)=>{
    
   dispatch(changeStatus(payload))


}

export const del=(payload)=>(dispatch)=>{

    dispatch(deltodo(payload))
}



export const ed = (payload)=>(dispatch)=>{

 dispatch(edit(payload))

}