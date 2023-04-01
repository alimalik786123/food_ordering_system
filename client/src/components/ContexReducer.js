import React, { createContext, useContext, useReducer } from 'react'
const Cartstate=createContext()
const Cartdispatch=createContext()
const reducer=(state,action)=>{
        
}
function Cartprovider({children}) {
   
    const [state,dispatch]=useReducer(reducer,[])
  return (
    <Cartdispatch.Provider value={dispatch}>
        <Cartstate.Provider value={state}>
                {children}
        </Cartstate.Provider>
    </Cartdispatch.Provider>
  )
}

export default Cartprovider
export const useCart=()=>useContext(Cartstate)
export const useDispatch=()=>useContext(Cartdispatch)
