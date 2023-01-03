import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./Reducers/User.js"
import postReducer from "./Reducers/Post.js"
export const store = configureStore({
  reducer: {
    User:userReducer ,
    Post: postReducer,
   
  },
})

