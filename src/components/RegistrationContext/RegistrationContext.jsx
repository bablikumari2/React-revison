
import {createContext,useState} from 'react'
export const RegistrationContext= createContext();

export const RegistrationContextProvider=({children}) =>{
  const [obj,setobj] = useState({})
  var objfun=(value)=>{
      setobj ({value})
  }
  return (
      <RegistrationContext.Provider value={{objfun,obj}}>{children}</RegistrationContext.Provider>
  )
}

