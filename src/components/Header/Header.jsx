import React, { useContext } from 'react'
import './Header.css'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'
import { useTheme } from '../../context/ThemeContextProvider'

const Header = ({toggleTheme}) => {

  const {isDarkMode} = useTheme()

  return (
    <div className={`headerWrapper ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>devfinder</h1>
      <div className="headerRight" onClick={toggleTheme}>
          <h4>{isDarkMode ? "LIGHT" : "DARK"}</h4>
          { isDarkMode ? <img src={sun} alt="A half moon image" /> : 
          <img src={moon} alt="A half moon image" />} 
      </div>
    </div>
  )
}

export default Header
