import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./posts.slice";

export default combineReducers({
  posts: postsReducer
});
