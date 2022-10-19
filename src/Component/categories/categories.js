import React from 'react'
import './categories.css'
import Bag from '../images/bag.png'
import Watch from '../images/watch.png'
import Shoes from '../images/shoes.png'

function categories() {
  return (

    <div className='container'>
        <div className='cat-item'>
        <h1>Watch</h1>
            <img className="banner-image" src={Watch} alt="Avatar" />   
        </div>
        <div className='cat-item'>
            <h1>Bag</h1>
            <img className="banner-image" src={Bag} alt="Avatar" />
        </div>
        
        <div className='cat-item'>
        <h1>Shoes</h1>
            <img className="banner-image" src={Shoes} alt="Avatar" /> 
        </div>
        

    </div>
  )
}

export default categories