import React, { useReducer } from 'react'

function Reduce() {
    const reduce=(state,action)=>{
      if(action.type==='inc')
        return state+1
      else if(action.type==='dec')
        return state-1
    }
    const [state,dispatch]=useReducer(reduce,0)

    return (
    <div className='d-flex'>
        <h1>count : {state} </h1>
        <button className="btn-success m-2" onClick={()=>dispatch({type:'inc'})} >inc</button>
        <button className="btn-success m-2" onClick={()=>dispatch({type:'dec'})} >dec</button>

    </div>
  )
}

export default Reduce