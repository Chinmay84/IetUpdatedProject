import {REGISTER_SUCCESS,REGISTER_FAIL} from '../Constants/Constants'
import axios from 'axios';
const RegisterDocAction = (userState, history) => {
    return async (dispatch) => {
        try {
            const {registeredUser}=localStorage.getItem("registeredUser");
            const docUser={
                ...registeredUser,
                ...userState
            }
            console.log(docUser);
            const data = await axios.post("http://localhost:8080/api/registerdoctor", docUser);
            console.log(data);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
            history.push("/");
        } catch (error) {
            console.log(error);
            dispatch({ type: REGISTER_FAIL, payload: error.message })
        }
    }
}

export default RegisterDocAction;