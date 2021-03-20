import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authreducer, userSigninReducer } from "../Reducers/LoginReducer";
import thunk from "redux-thunk";
import { loginReducer } from "../Reducers/LoginReducers";

const initState = {
  userSignIn: localStorage.getItem("user") ? localStorage.getItem("user") : null
}
const reducer = combineReducers({

  loginState:loginReducer,
  userSignIn: userSigninReducer,
  auth: authreducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;