import React, { useState } from 'react'
import { addUser } from './Slice'
import { useDispatch } from 'react-redux'
const Practice = () => {
    const [input,setInput]=useState()
    const [input2,setInput2]=useState()
    const dispatch=useDispatch()
    




  return (
    <>
    <div>
        <label>Name</label>
      <input type='text' onChange={(e)=>setInput(e.target.value)} />
    </div>
    <div>
        <label>Email</label><input type='text' onChange={(e)=>setInput2(e.target.value)}/>
    </div>
    <div><button onClick={()=>{
        let obj={
            Name: input,
            Email: input2
        }
        dispatch(addUser(obj))
    }}>Click </button></div>
    </>
  )
}

export default Practice
