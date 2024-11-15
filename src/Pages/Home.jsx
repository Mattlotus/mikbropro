import React from 'react'
import logo from '../MBP LOGO.png';
import pic1 from '../pic1.jpg';
import pic2 from '../pic2.jpg';
import pic3 from '../pic3.jpg';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className='mainContainer'>
           <Link to="/BookNow" className='button'>BOOK NOW</Link>
           <div className="navContainer">
            <img className="logo" src={logo}/>
            <div className='btnContainer'>
            <Link to="/" className='button'>HOME</Link>
            <Link to="/Profile" className='button'>PROFILE</Link>
            <Link to="/Commercial" className='button'>COMMERCIAL</Link>
            <Link to="/Portraits" className='button'>PORTRAITS</Link>
            </div>
    
            </div>
            <div className="picContainer">
              <img src={pic1}/>
              <img src={pic2}/>
              <img src={pic3}/>
           </div>
    
    
    
    
    
          
        </div>
      );
}

export default Home
