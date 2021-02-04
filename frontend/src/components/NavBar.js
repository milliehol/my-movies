import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
  <center>  <div>
      <Link to='/genres' style={{paddingRight: '10px'}}>Genres  </Link>
      <Link to='/genres/new'> Add Genre</Link>
      

    </div> </center>

  )
};

export default NavBar;
