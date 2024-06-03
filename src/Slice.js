import { createSlice } from "@reduxjs/toolkit"
const initialState={
    users:[]
}


const Slice = createSlice({
name : "users",
initialState,

reducers:{
    addUser:(state,action)=>{
        state.users.push(action.payload)
    }
}

})

export const {addUser}  =Slice.actions
export default Slice.reducer