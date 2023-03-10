import React from "react";

function useLocalStorage(itemName, initialValue){
    const [error,setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    const [syncronisedItem,setSyncronisedItem]= React.useState(true);
  
    React.useEffect(() => {
      try{
        setTimeout(() => {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
          setSyncronisedItem(true);
        },1000);}
        catch(error){
          setError(error);
        }
      },[syncronisedItem]
    );
  
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
      }
      catch(error){
        setError(error);
      }
    };
    const sincronizeItem=()=>{
      setLoading(true);
      setSyncronisedItem(false);

    }
    // Regresamos los datos que necesitamos
    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem,
    };
  }

  export {useLocalStorage};