
import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
export default function AddProduct() {

    const [id, setId] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    

    const addClickHandeler =async () => {
       const result =await Axios.post("http://localhost:8080/app/register/",{id,fname,lname,address,email,password})
        console.log(result);
        setId('');
        setfname('');
        setlname('');
        setaddress('');
        setemail('');
        setpassword('');
    }

    return (
        <div className="w-50 mt-4 m-auto p-5 shadow-lg bg-white ">

            <h3>Register</h3>
            <hr />
            <div className="form-group row">
                <label htmlFor="id" className="col-2 col-form-label">ID</label>
                <div className="col-10">
                    <input id="id" type="text" placeholder="userid" className="form-control"
                        onChange={e=>setId(e.target.value) } value={id}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="pname" className="col-2 col-form-label">NAME</label>
                <div className="col-10">
                    <input id="fname" type="text" placeholder="user name" className="form-control"
                      onChange={e=>setfname(e.target.value) }  value={fname}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="lname" className="col-2 col-form-label">Last Name</label>
                <div className="col-10">
                    <input id="lname" type="text" placeholder="product price" className="form-control"
                      onChange={e=>setlname(e.target.value) }  value={lname}/>
                </div>
            </div>
            
            <div className="form-group row">
                <label htmlFor="lname" className="col-2 col-form-label">Address</label>
                <div className="col-10">
                    <input id="address" type="text" placeholder="product price" className="form-control"
                      onChange={e=>setaddress(e.target.value) }  value={address}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="email" className="col-2 col-form-label">email</label>
                <div className="col-10">
                    <input id="email" type="text" placeholder="product price" className="form-control"
                      onChange={e=>setemail(e.target.value) }  value={email}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="email" className="col-2 col-form-label">password</label>
                <div className="col-10">
                    <input id="password" type="password" placeholder="password" className="form-control"
                      onChange={e=>setpassword(e.target.value) }  value={password}/>
                </div>
            </div>

            <button className="btn btn-info btn-block" onClick={addClickHandeler}>Submit</button>
           
          
        </div>
    )
}

