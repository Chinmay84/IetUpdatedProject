import axios from 'axios';

const registerUser=(user)=>{

    const {data}=axios.post("http://localhost:8080/api/unauthuser/signUp",user);
    console.log("success");

}


const registerDoctor=(user)=>{
    const {data}=axios.post("http://localhost:3000/api/unauthuser/signUp",user);
}

const registerFoster=(user)=>{
    const {data}=axios.post("http://localhost:3000/api/unauthuser/signUp",user);
}

export default {registerUser,
        registerDoctor,
        registerFoster,
}