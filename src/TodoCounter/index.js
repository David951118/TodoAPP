import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <div className="continerCounter">
            <div class="hit-the-floor">ToDo APP</div>    
            <h2 className="Hello--text">Hola,   </h2>
            <h2 className="Counter--text">Has Completado {completedTodos} de {totalTodos} Tareas por hacer</h2>
        </div>
    );
}

export {TodoCounter};