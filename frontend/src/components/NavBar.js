import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Form, Button } from 'react-bootstrap';


const NavBar = (props) => {

  return (
  <center>  <div className="nav">
      <Link to='/genres' style={{paddingRight: '10px'}} className="nav-link">Genres  </Link>
      <Link to='/movies' style={{paddingRight: '10px'}} className="nav-link">Movies  </Link>
      <Link to='/genres/new' className="nav-link"> Add Genre</Link>


    </div> </center>

  )
};

export default NavBar;
