import React, {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/dragon1.jpg'; 
import { UserContext } from '../App';

const Navbar = () => {
  // const { state, dispatch } = useContext(UserContext);

      return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-inner bg-light ">
  <NavLink className="navbar-brand" to="/">
    <img src={logo} alt="logo" />
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="visually-hidden"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      
      {/* <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Register</NavLink>
      </li>
       */}
    

    </ul>
  </div>
</nav>
    </>
    )}
  


export default Navbar
