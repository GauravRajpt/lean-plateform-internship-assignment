import { createSlice } from "@reduxjs/toolkit";

const navslice= createSlice({
    name:"nav",
    initialState:true,
    reducers:{
        remove:(state)=>{
          return  state=false;
        }
    }
})

export const {remove} = navslice.actions;
export default navslice.reducer;