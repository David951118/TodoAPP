import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch (){
  const {searchValue, setSearchValue}= React.useContext(TodoContext)
  


  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

    return(
      
      <div id="idbusca" className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search a ToDo"
        value={searchValue}
        onChange={onSearchValueChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">Buscar</button>
        </div>
      </div>
      
      
    );
}

export {TodoSearch};