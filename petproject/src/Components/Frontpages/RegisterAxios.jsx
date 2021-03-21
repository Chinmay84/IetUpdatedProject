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

const getPost=(user)=>{
    const {data}=axios.get("http://localhost:8080/api/unauthuser/getallpost");
}

export default {registerUser,
        registerDoctor,
        registerFoster,
        getPost
}