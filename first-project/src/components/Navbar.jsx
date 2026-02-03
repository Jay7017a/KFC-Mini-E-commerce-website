import React from 'react';

const Navbar=()=>{
  return (
    <div className="navbar">
        <img src={logo} alt="KFC"/>
        <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>CONTACT</li>
            <li>ABOUT</li>
            <li>PAY</li>
        </ul>
        <button className="btn1">LOGIN</button>
    </div>
  )
}
export default Navbar;