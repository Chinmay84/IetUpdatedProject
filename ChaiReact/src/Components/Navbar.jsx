import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/listProducts">List Products{products && (<span className="badge badge-light">{products.length}</span>)}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addProduct">Add Products</Link>
        </li>
      </ul>
    </nav>
  )
}
