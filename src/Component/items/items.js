import React from 'react'
import './items.css'

function items({name,image}) {
  return (
    <div>
        <h1 className='item-title'>{name}</h1>
        <div className='item-container'>

        <div className='item-list'>
            <div className='item-card'>
            <img className="banner-image" src={image} alt="Avatar" />
            <h3 className='item-description'>x-Box for Your Living Room</h3>
        <span className='item-description' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
        <h1 >$600</h1>
        <button className='item-button'>Buy Now</button>
            </div>
        </div>

        <div className='item-list'>
            <div className='item-card'>
            <img className="banner-image" src={image} alt="Avatar" />
            <h3>x-Box for Your Living Room</h3>
            <span className='item-description' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
        <h1 >$600</h1>
        <button className='item-button'>Buy Now</button>
            </div>
        </div>

        <div className='item-list'>
            <div className='item-card'>
            <img className="banner-image" src={image} alt="Avatar" />
            <h3>x-Box for Your Living Room</h3>
            <span className='item-description' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
        <h1 >$600</h1>
        <button className='item-button'>Buy Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default items