import React from "react";
import './TodoCounter.css';


function TodoCounter({totalTodos, completedTodos, loading}){
    return(
        <div className="continerCounter">
            <div className="hit-the-floor">ToDo APP</div>    
            <h2 className="Hello--text">Hola,   </h2>
            <h2 className={`Counter--text ${!!loading && "Counter--text--loading"}`}>
            Has Completado {completedTodos} de {totalTodos} Tareas por hacer</h2>
        </div>
    );
}

export {TodoCounter};