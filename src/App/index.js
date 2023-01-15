import react, { Children } from "react";
import React, { useState } from 'react'
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
import { TodoList } from "../TodoList";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";


// const defaultTodos = [
//   {text:'Las lajas', completed:true},
//   {text:'Pasto en Carnavales', completed:false},
//   {text:'Ipiales ', completed:false}
// ];

function App() {
  
  return (  
    <TodoProvider>
      <AppUI />
    </TodoProvider>
   
  );
}

export default App;