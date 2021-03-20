import React from 'react'
import axios from './BaseAxios'

var user={
    "id":87,
"fname":"chi",
"lname":"pha",
"email":"phabz",
"password":"ascsc",
"address":"asasc"
}

const TokenTest=()=>{
   
    axios.post("/token",user);
    console.log(user);
    return "hello";
}

export default TokenTest
