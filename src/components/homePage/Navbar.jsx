import React from 'react'
import logo from '../../logo2.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
       
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#"><img className="logo" src={logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"var(--primary-white)"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">links</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">about me</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">services </a>
        </li>
        
        <li className="nav-item">
            
          <a className="nav-link" aria-current="page" href="#">how work</a>
          
        </li>
        
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">portfolio</a>
        </li>

       
        
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">contacts</a>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>

    )
}

export default Navbar
