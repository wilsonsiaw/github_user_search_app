import React from 'react'
import './Header.css'
import moon from '../../assets/moon.svg'

const Header = () => {
  return (
    <div className='headerWrapper'>
      <h1>devfinder</h1>
      <div className="headerRight">
          <h4>DARK</h4>
          <img src={moon} alt="A half moon image" />
      </div>
    </div>
  )
}

export default Header
