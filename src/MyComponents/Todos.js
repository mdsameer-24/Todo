import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";
export const Todos = (props) => {
  let mystyle={
    minHeight:"50vh"
  }
  return (
    <div className='container my-3' style={mystyle}>
     <center> <h3 className='my-3'>Todos List</h3></center>
     {props.todos.length==0?"No Todos to Display":
     props.todos.map((todo)=>
     {
      return(
      
       <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
       
      )
     })
    }
    
     
    
      
      </div>
    
  )
}

