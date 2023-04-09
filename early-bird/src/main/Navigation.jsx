import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import './navigation.css'
import FlockPage from '../flock/FlockPage'

function MainPage(){

}
function MyPage(){

}
function Navigation() {
    return (
      <Router>
        <div>
          <nav>
  
            <span>
                <Link to="/" className="Home" style={{textDecoration: "none"}}>Home</Link>
            </span>
            <span>
                <Link to="/flock" className='Flock' style={{textDecoration: "none"}}>Flock</Link>
            </span>
            <span>
                <Link to="/my-page" className='myPage'  style={{textDecoration: "none"}}>My Page</Link>
            </span>
     
          </nav>
  
          <Routes>
            <Route path="/flock" element={<FlockPage />} />
            <Route path="/my-page" element={<MyPage />} /> 
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default Navigation;