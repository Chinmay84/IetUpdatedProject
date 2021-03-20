
import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import {RegisterAuthAction} from '../../Redux/Action/AuthAction';
function AddUser(props) {

    const {user,register} = props;
    const history=useHistory();
/*    const [id, setId] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
 */   
    const [userState, setuserState] = useState({}
 /*       id:"",
        fname:"",
        lname:"",
        address:"",
        email:"",
        password:""   */
    )

    const addClickHandeler =async () => {
/*        var objuser={
            id:id,fname:fname,lname:lname,address:address,email:email,password:password
        }
*/

//        setuserState(userState.push(objuser));

//       setuserState({id:id,fname:fname,lname:lname,address:address,email:email,password:password});
       console.log(userState);
//       const result =await Axios.post("http://localhost:8080/app/register/",{id,fname,lname,address,email,password})
//        console.log(result);
/*        setId('');
        setfname('');
        setlname('');
        setaddress('');
        setemail('');
        setpassword('');  */
        register(userState,history);    
        console.log(user);  
    }


 

    return (
        <div className="w-50 mt-4 m-auto p-5 shadow-lg bg-white ">

            <h3>Register</h3>
            <hr />
            <div className="form-group row">
                <label htmlFor="id" className="col-2 col-form-label">ID</label>
                <div className="col-10">
                    <input id="id" type="text" placeholder="userid" className="form-control"
                        onChange={
                            (e)=>{
                                const id=e.target.value;
                                setuserState({...userState,...{id}})}
                        
                        } />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="pname" className="col-2 col-form-label">NAME</label>
                <div className="col-10">
                    <input id="fname" type="text" placeholder="user name" className="form-control"
                      onChange={(e)=>{
                        const fname=e.target.value;
                        setuserState({...userState,...{fname}})}  
                        }  />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="lname" className="col-2 col-form-label">Last Name</label>
                <div className="col-10">
                    <input id="lname" type="text" placeholder="product price" className="form-control"
                      onChange={(e)=>{
                        const lname=e.target.value;
                        setuserState({...userState,...{lname}})}
                    }  />
                </div>
            </div>
            
            <div className="form-group row">
                <label htmlFor="lname" className="col-2 col-form-label">Address</label>
                <div className="col-10">
                    <input id="address" type="text" placeholder="product price" className="form-control"
                      onChange={
                        (e)=>{
                            const address=e.target.value;
                            setuserState({...userState,...{address}})}
                      }  />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="email" className="col-2 col-form-label">email</label>
                <div className="col-10">
                    <input id="email" type="text" placeholder="product price" className="form-control"
                          
                      onChange={
                        (e)=>{
                            const email=e.target.value;
                            setuserState({...userState,...{email}})}
                      }  />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="email" className="col-2 col-form-label">password</label>
                <div className="col-10">
                    <input id="password" type="password" placeholder="password" className="form-control"
                      onChange={
                        (e)=>{
                            const password=e.target.value;
                            setuserState({...userState,...{password}})}
                      }  />
                </div>
            </div>

            <button className="btn btn-info btn-block" onClick={addClickHandeler}>Submit</button>
           
          
        </div>
    )
}



const mapStateToProps=(state)=>{
    return{
        user:state,
    };
}

const mapDispatchToProps =(dispatch)=>{
    return{
        register: (userState,history) =>{
            dispatch(RegisterAuthAction(userState,history));
            console.log(userState);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddUser)

