import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {AddTodo} from './MyComponents/AddTodo';
import {Todos} from './MyComponents/Todos';
import {About} from './MyComponents/About';
// import Footer from './MyComponents/footer';
import React, { useEffect, useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Link,
//   Route,
// } from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    // console.log("deleted")
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }));
    
  }
  const addTodo = (title,desc)=>{
    let sno;
    if(todos.length===0)
    {
      sno=0;
    }else{
    sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
   
  
     
    
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  
  return (
    <>
     
     
        <Header title="My Todos List" searchBar={false}/>
        
          
            <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
            
       
           
          
         
        
        {/* <Footer/> */}
      
          
      
       
        
    </>

  );
}

export default App;
