import React from 'react'
import logo from '../../logo2.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {NavLink,Link} from 'react-router-dom'

const Navbar = () => {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/"><img className="logo" src={logo}/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"var(--primary-white)"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" exact  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/doc-list">documentations</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/works">we are hirring</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/services">services </NavLink>
        </li>
        
        <li className="nav-item">
            
          <NavLink className="nav-link" aria-current="page" to="/how-work">how work</NavLink>
          
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/portfolio">portfolio</NavLink>
        </li>

       
        
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/contact">contacts</NavLink>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>


    )
}

export default Navbar



