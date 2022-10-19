import React from 'react';
import './navbar.css';
import Cart from '../images/cart.png'

function navBar() {
    return (
        <div className="navbar">
           <div className='logo'>
            
           
      <a name="Home">Home</a>
      <a name="Home">Shoes</a>
      <a name="Home">Bagpacks</a>
      <a name="Home">Contacts</a>
      
           
           </div>
           <div className="avatar">
           <img className="avatar" src={Cart} alt="Avatar" />
           </div>
            
        </div>
    )
}

export default navBar