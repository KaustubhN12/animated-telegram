import { ADD_TODO, CHANGE_STATUS, DEL_TODO, EDIT_TODO } from "./actiontype";

const initialState={
todos:[]

}


export const reducer=(state=initialState,{type,payload})=>{

 
    switch (type) {

        case ADD_TODO:{
            return {...state,todos:[...state.todos,payload]}
        }
            
           case CHANGE_STATUS:{
            let newarr= state.todos.map((el)=>{
                let x = el.status
                if(el.id==payload){
                   let obj = {
                     task:el.task,
                     status:!el.status,
                     id:el.id
                   }
                   return obj
                }

                else{
                    return el
                }
              
                
            })
          console.log(newarr,payload)
            return{...state,todos:newarr}
           }


           case DEL_TODO:{
            let newarr= state.todos.filter((el)=>{
               return el.id !=payload
              
                
            })
          
            return{...state,todos:newarr}
           }
    

           case EDIT_TODO:{
            console.log(payload)
            let newarr= state.todos.map((el)=>{
                
                if(el.id==payload.idd){
                   let obj = {
                     task:payload.x,
                     status:el.status,
                     id:el.id
                   }
                   return obj
                }

                else{
                    return el
                }
              
                
            })
          console.log(newarr,payload)
            return{...state,todos:newarr}


           }



        default:
            return state;
    }

  

}