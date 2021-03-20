import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST} from "../Constants/Constant";
//import axios from '../../Components/Axios/BaseAxios'
import axios from 'axios';

export const LoginAction=(loginState,history)=> async(dispatch)=>{
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post("http://localhost:8080/app/authenticate",loginState);
        dispatch({ type: LOGIN_SUCCESS, payload:data});
        localStorage.setItem("user", data);
        
      // if (new Date(data.expires_at) > new Date()) {
      //     axios.defaults.headers.common["Authorization"] = `Bearer ${data.jwttoken}`;}
      console.log("login action before push")
      document.location.href("/");
    }catch(error){
    dispatch({type : LOGIN_FAIL, payload:error })
    }
}
