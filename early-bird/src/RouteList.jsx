import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FlockPage from './Pages/Flock/FlockPage';
import MainPage from './Pages/Main/MainPage';
import MyPage from './Pages/MyPage/MyPage';

function RouteList(){
    return(
    <Router>
        <Routes>
            <Route exact path="/flock" element={<FlockPage />} />
            <Route exact path="/my-page" element={<MyPage />} /> 
            <Route exact path="/" element={<MainPage />} />
        </Routes>
    </Router>
    );
}
export default RouteList;