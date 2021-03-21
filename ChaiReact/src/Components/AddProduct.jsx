import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import AlertMessage from './Utility/AlertMessage';
export default function AddProduct() {

    const [pid, setPid] = useState('');
    const [pname, setPname] = useState('');
    const [price, setPrice] = useState('');
    
    const [successMessage, setSuccessMessage] = useState();

    const addClickHandeler =async () => {
       const result =await Axios.post("http://localhost:8080/ProductRestApi/api/products/",{pid,pname,price})
        console.log(result);
        setSuccessMessage(result.data);
        setPid('');
        setPname('');
        setPrice('');
    }

    return (
        <div className="w-50 mt-4 m-auto p-5 shadow-lg bg-white ">
             {
                successMessage && (<AlertMessage variant="success" onClick={() => setSuccessMessage(null)}>
                    {successMessage}</AlertMessage>)
             }
            <h3>Add Products</h3>
            <hr />
            <div className="form-group row">
                <label htmlFor="pid" className="col-2 col-form-label">PID</label>
                <div className="col-10">
                    <input id="pid" type="text" placeholder="product id" className="form-control"
                        onChange={e=>setPid(e.target.value) } value={pid }/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="pname" className="col-2 col-form-label">PNAME</label>
                <div className="col-10">
                    <input id="pname" type="text" placeholder="product name" className="form-control"
                      onChange={e=>setPname(e.target.value) }  value={ pname}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="price" className="col-2 col-form-label">PRICE</label>
                <div className="col-10">
                    <input id="price" type="text" placeholder="product price" className="form-control"
                      onChange={e=>setPrice(e.target.value) }  value={ price}/>
                </div>
            </div>
            
            <button className="btn btn-info btn-block" onClick={addClickHandeler}>Submit</button>
           
          
        </div>
    )
}
