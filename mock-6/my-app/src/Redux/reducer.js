import { ADD_TODO } from "./actiontype";

const initialState={
todos:[]

}


export const reducer=(state=initialState,{type,payload})=>{

 
    switch (type) {

        case ADD_TODO:{
            state.todos.push(payload)
        }
            
           
    
        default:
            break;
    }

  

}