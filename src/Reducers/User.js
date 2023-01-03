// import { createStore } from "@reduxjs/toolkit"
// const initialState={};
//  const userReducer=createStore(initialState,{
//     LoadUserRequest:(state,action)=>{
//        state.loading=true;
//     },
//     LoadUserSuccess:(state,action)=>{
//        state.user=action.payload;
//        state.loading=false ;
//     },
//     LoadUserFail:(state,action)=>{
//         state.error=action.payload;
//     },
// })

// export {userReducer}

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    LoadUserRequest: (state) => {
    
      state.loading=true
    },
    LoadUserSuccess: (state,action) => {
      state.loading=false
      state.user=action.payload
    },
    LoadUserFail: (state, action) => {
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { LoadUserRequest, LoadUserSuccess, LoadUserFail} = userSlice.actions

export default userSlice.reducer