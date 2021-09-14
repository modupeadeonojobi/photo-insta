import { combineReducers } from "redux";
import postReducers from "./postsReducers";



const reducers = combineReducers({
  posts: postReducers
})

export default reducers;