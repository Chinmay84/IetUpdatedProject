import { getByDisplayValue } from '@testing-library/dom'
import React from 'react'
import tokenTest from '../Axios/TokenTest'

function TokenTest() {
   
   const display=()=>{
       return tokenTest.TokenTest()
   } 

    return (
        <div>
             <h1>{display}</h1>
        </div>
    )
}

export default TokenTest
