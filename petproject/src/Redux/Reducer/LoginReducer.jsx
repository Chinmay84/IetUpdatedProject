import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST} from "../Constants/Constants";



export const loginReducer=(state = {}, action) => {

    switch(action.type){
        case LOGIN_REQUEST:
            return{loading:true}
        case LOGIN_SUCCESS:
            return {user:action.payload};
        case LOGIN_FAIL:
            return {message:"login fail"};
        default :
            return state;
    }
}