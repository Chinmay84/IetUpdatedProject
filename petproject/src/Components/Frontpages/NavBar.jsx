import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar(props) {
   // const userSignIn = useSelector(state => state.userSignIn);

   // const history = useHistory();
   // const dispatch = useDispatch();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav">

                        
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
        
            
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="#logout" >LogOut</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/token">TokenTest</Link>
                            </li>
                
                </ul>
            </nav>


        </div>
    )
}

