import React from 'react'
import './footer.css'

function footer() {
  return (
    <div className='footer'>
        <h1>LET'S STAY IN TOUCH</h1>
        <span >Get updates on sales specials and more </span>
       <input type="text" placeholder='Enter your email'></input>
        <button className='banner-button'>Send</button>
    </div>
  )
}

export default footer