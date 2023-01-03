import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  post:null,
}

export const postSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    LoadPostRequest: (state) => {
    
      state.loading=true
    },
    LoadPostSuccess: (state,action) => {
      state.loading=false
      state.post=action.payload
    },
    LoadPostFail: (state, action) => {
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { LoadPostRequest, LoadPostSuccess, LoadPostFail} = postSlice.actions

export default postSlice.reducer