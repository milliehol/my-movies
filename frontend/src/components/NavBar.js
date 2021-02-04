import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/genres' style={{paddingRight: '10px'}}>Genres  </Link>

    </div>

  )
};

export default NavBar;
