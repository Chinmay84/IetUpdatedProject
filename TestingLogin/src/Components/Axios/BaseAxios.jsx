import Axios from 'axios';
const token=localStorage.getItem("user");
const axios=Axios.create({
    
     baseURL:"http://localhost:8080/app",
     headers: {
         Authorization: `Bearer ${token}`
     }
    
})

export default axios;