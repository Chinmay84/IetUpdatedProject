import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from '../Constants/Constant';

const RegisterAuthAction = (userState, history) => {
    return async (dispatch) => {
        try {
            const data = await axios.post("http://localhost:8080/app/register", userState);
            console.log(data);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
            history.push("/");
        } catch (error) {
            console.log(error);
            dispatch({ type: REGISTER_FAIL, payload: error.message })
        }
    }
}


const LoginAuthAction = (loginState, history) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post("http://localhost:8080/app/authenticate", loginState);
            console.log(data);
            dispatch({ type: LOGIN_SUCCESS, payload: data });
            localStorage.setItem("user", data);
        } catch (error) {
            console.log(error);
            dispatch({ type: LOGIN_FAIL, payload: error.message })
        }
    }
}


const LogoutAuthAction = () => {
    return async (dispatch) => {
        try {
            /* const { data } = await axios.get("http://localhost:8080/app/logout"); */
            dispatch({ type: LOGOUT_SUCCESS });
            localStorage.removeItem("user");
            document.location.href("/login");
        } catch (error) {
            console.log(error);
            dispatch({ type: LOGOUT_FAIL, payload: error.message })
        }
    }
}




export { RegisterAuthAction, LoginAuthAction, LogoutAuthAction };