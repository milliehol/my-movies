import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Form, Button } from 'react-bootstrap';


//functional component, does not have a state
const NavBar = (props) => {

  return (
  <center>  <div className="Navbar">
      <Link to='/genres' style={{paddingRight: '10px'}} className="nav-link">Genres </Link>

      <Link to='/genres/new' className="nav-link"> Add Genre</Link>
      <Link to='/movies' style={{paddingRight: '10px'}} className="nav-link">  Movies  </Link>
      


    </div> </center>

  )
};

export default NavBar;
