import { combineReducers } from "redux"
import users from "./users"
import questions from "./questions"
import authUser from "./auth"
import { loadingBarReducer } from "react-redux-loading"

export default combineReducers({
	users,
	questions,
	authUser,
	loadingBar : loadingBarReducer,
})
