import {REGISTER_SUCCESS,REGISTER_FAIL} from '../Constants/Constants'
import axios from 'axios';
const RegisterAction = (userState, history) => {
    return async (dispatch) => {
        try {
            const data = await axios.post("http://localhost:8080/api/unauthuser/signUp", userState);
            console.log(data);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
            history.push("/");
        } catch (error) {
            console.log(error);
            dispatch({ type: REGISTER_FAIL, payload: error.message })
        }
    }
}

export default RegisterAction;