import React from 'react'
import Logo from '../../assets/logo.png'
// import Bars from '../../assets/bars.png'
import { Link } from "react-router-dom";
import './Header.css' 

const Header = () => {

  const loutHandler = () =>{
    sessionStorage.removeItem('admin');
    sessionStorage.removeItem('trainer');
  }
  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo' />
      <ul className='header2-menu'>
          <li>
            <Link
             className='home-link'
             onClick={loutHandler}
              to='/login'
            >Logout</Link>
          </li>
        </ul>
      
    </div>
  );
};

export default Header
