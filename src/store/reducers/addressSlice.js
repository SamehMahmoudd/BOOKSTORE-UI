 import { createSlice } from "@reduxjs/toolkit";
import { UserSevice } from "../../services/userService";

 const initialState ={  
 isloader :false
}
 const AddressSlice = createSlice({
    name : "Loader",
    initialState,
    reducers:{
    }
    ,extraReducers :{
        [UserSevice.pending]:(state,action)=>{
            console.log(action);
            state.isloader=true
        },
        [UserSevice.fulfilled]:(state,action)=>{
            state.isloader =false
        },
        [UserSevice.rejected]:(state,action)=>{
            console.log(action);
        }
    }
 })

 export const {addAdress } = AddressSlice.actions

 export default AddressSlice.reducer