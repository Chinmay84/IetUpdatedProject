import {LOGOUT_FAIL, LOGOUT_SUCCESS} from "../Constants/Constant";


const LogoutAuthAction = () => {
    async (dispatch) => {
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