import { applyMiddleware, combineReducers, compose, createStore } from "redux";
//import { authreducer, userSigninReducer } from "../Reducers/LoginReducer";
import thunk from "redux-thunk";
import { loginReducer } from "../Reducer/LoginReducer";
import registerReducer from '../Reducer/RegisterReducer';

const initState = {
  userSignIn: localStorage.getItem("user") ? localStorage.getItem("user") : null
}
const reducer = combineReducers({
//  userSignIn: userSignIn,
  registerId:registerReducer,
  loginState:loginReducer,
  userSignIn:initState,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  
  composeEnhancers(applyMiddleware(thunk))
);
export default store;