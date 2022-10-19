import React from 'react';
import './banner.css';
import xbox from '../images/xbox.png'

function banner() {
  return (
    <div>
        <div className='banner'>
      <div className='banner-text'>
        <h1>x-Box for Your Living Room</h1>
        <h5 className='banner-discription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada rutrum maximus. </h5>
        <h1 className='banner-price'>$600</h1>
        <button className='banner-button'>Buy Now</button>
      </div>
      <div >
       
         <img className="banner-image" src={xbox} alt="Avatar" />
      </div>
      </div>
    </div>
  );
}

export default banner;
