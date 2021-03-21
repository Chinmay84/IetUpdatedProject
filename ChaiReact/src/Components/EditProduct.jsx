import Axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import AlertMessage from "./Utility/AlertMessage";

export default function EditProduct(props) {
    const emailId = props.match.params.id;

    const [name, setPname] = useState('');
    const [price, setPrice] = useState('');

    const [successMessage, setSuccessMessage] = useState();

    useEffect(() => {
        if (productId) {
            const fetchData = async () => {
                const result = await Axios.get(`http://localhost:8080/ProductRestApi/api/products/${productId}`)
                const prod = result.data;
                setPid(prod.pid);
                setPname(prod.pname);
                setPrice(prod.price);
            }
            fetchData();
        }

    }, [])

    const editClickHandeler = async () => {
        const result = await Axios.put(`http://localhost:8080/ProductRestApi/api/products/`,
            { pid, pname, price });
        console.log(result);
        setSuccessMessage(result.data);
    }

    return (
        <div className="w-50 mt-4 m-auto p-5 shadow-lg bg-white ">
            {
                successMessage && (<AlertMessage variant="success" onClick={() => setSuccessMessage(null)}>
                    {successMessage}</AlertMessage>)
            }
            <h3>Edit  Products</h3>
            <hr />
            <div className="form-group row">
                <label htmlFor="pid" className="col-2 col-form-label">PID</label>
                <div className="col-10">
                    <input id="pid" type="text" placeholder="product id" className="form-control"
                        disabled={true} onChange={e => setPid(e.target.value)} value={pid} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="pname" className="col-2 col-form-label">PNAME</label>
                <div className="col-10">
                    <input id="pname" type="text" placeholder="product name" className="form-control"
                        onChange={e => setPname(e.target.value)} value={pname} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="price" className="col-2 col-form-label">PRICE</label>
                <div className="col-10">
                    <input id="price" type="text" placeholder="product price" className="form-control"
                        onChange={e => setPrice(e.target.value)} value={price} />
                </div>
            </div>

            <button className="btn btn-info btn-block" onClick={editClickHandeler}>Save</button>

        </div>
    )
}
