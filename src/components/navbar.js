import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

function NavBar()
{
 
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg" >
        
        <Link to="/" className="navbar-brand">Tracker-App</Link>
        
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item" style={{color: "white"}}>
                    <Link to="/" className="nav-link">Exercises</Link>
                    
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    
                </li>
                <li className="navbar-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                    
                </li>
            </ul>
        </div>
    </nav>
);
    
}

export default NavBar;
