import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.css'


function NavBar() {
    return (
        <div>
          <nav>
            <span>
                <Link to="/" className="Home" style={{textDecoration: "none"}}>Home</Link>
            </span>
            <span>
                <Link to="/Flock" className='Flock' style={{textDecoration: "none"}}>Flock</Link>
            </span>
            <span>
                <Link to="/my-page" className='myPage'  style={{textDecoration: "none"}}>My Page</Link>
            </span>
     
          </nav>
  
        </div>
    );
  }

  export default NavBar;