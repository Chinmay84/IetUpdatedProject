import React from 'react'
import axios from 'axios';

function Test() {
    
    const data=axios.get(`localhost://8080/api/unauthuser/token`,{headers: { Authorization: `Bearer ${userInfo.token}`})
    
    return (
        <div>
            
        </div>
    )
}

export default Test
