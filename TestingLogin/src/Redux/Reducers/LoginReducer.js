import axios from "axios";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "../Constants/Constant";
import {initstate} from '../InitialState';

const authState = {
    isLoggedIn: false,
    user: {
        name: "",
        expires_at: "",
        jwttoken: "",
        authorities: [],
    },
};


const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try {
        const authobj = JSON.parse(auth);
        const { expires_at, jwttoken } = authobj.user;
        if (new Date(expires_at) > new Date()) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`;
            return authobj;
        }
        return authState;
    } catch (error) {
        return authState;
    }
}


const newAuth = getAuthState();



export const userSigninReducer = (state = {}, action) => {
    switch (action.payload) {
        case LOGIN_SUCCESS:
            return { user: action.payload };

        case LOGIN_FAIL:
            return { error: action.payload };
        case LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
}
export const authreducer = (state = newAuth, action) => {

    switch (action.type) {
        case REGISTER_SUCCESS:

            const newAuthState = {
                isLoggedIn: true,
                user: action.payload
            };
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${action.payload.jwttoken}`
            localStorage.setItem("auth", JSON.stringify(newAuthState));
            return newAuthState;

        case REGISTER_FAIL:
            return state;

        case LOGOUT_FAIL:
            localStorage.removeItem("auth");
            return authState;

        default:
            return state;

    }


};







//export default authreducer;