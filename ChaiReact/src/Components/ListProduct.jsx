import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import AlertMessage from './Utility/AlertMessage';
import { useDispatch, useSelector } from 'react-redux';
import { ListProductsAction } from '../Action/ProducAction'

export default function ListProduct(props) {
    /*const [products, setProducts] = useState([]);
    const [successMessage, setSuccessMessage] = useState();*/
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    /* const fetchData = async () => {
         const result = await Axios.get("http://localhost:8080/ProductRestApi/api/products/");
         console.log(result.data);
         setProducts(result.data);
     }
     useEffect(() => {
 
         fetchData();
     }, [])*/

    useEffect(() => {
        dispatch(ListProductsAction());
    }, [dispatch])

    const deleteHandeler = async (id) => {
        const result = await Axios.delete(`http://localhost:8080/ProductRestApi/api/products/${id}`);
        console.log(result);
        /*  setSuccessMessage(result.data);
      fetchData();*/

    }

    const editHandeler = (id) => {
        props.history.push(`/editProduct/${id}`);
    }
    return (
        <React.Fragment>


            {loading ? (<div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>) :
                (
                    <div>
                        {products.length > 0 ?
                            <table className=" jumbotron table table-bordered shadow-lg m-5">
                                <thead>
                                    <tr>
                                        <th>PID</th>
                                        <th>PNAME</th>
                                        <th>PRICE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product) => (
                                            <tr key={product.pid}>
                                                <td>{product.pid}</td>
                                                <td>{product.pname}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <button onClick={() => editHandeler(product.pid)}><span className="fas fa-cog text-success fa-spin"></span></button>/
                                <button onClick={() => deleteHandeler(product.pid)}><span className="fas fa-trash text-danger fa-spin" ></span></button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            : <h1>No Product List is Available</h1>
                        }</div>)
            }
        </React.Fragment>
    )
}
/*
<div>

                { successMessage && (<AlertMessage onClick={() => setSuccessMessage(null)}>
                    {successMessage}</AlertMessage>)}
            </div >
*/