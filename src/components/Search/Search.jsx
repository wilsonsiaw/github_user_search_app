import React from 'react'
import './Search.css'
import search from '../../assets/search.svg'
import { useTheme } from '../../context/ThemeContextProvider'

const Search = () => {

  const { isDarkMode } = useTheme()
  
  return (
    <div className="formWrapper">
        <form className={`form ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <img src={search} alt="A search image" className='searchImg'/>
            <input type="text" id='search' 
            placeholder='Search GitHub username...' className={`input ${isDarkMode ? 'dark-mode' : 'light-mode'}`}/>
            <button className='searchBtn'>Search</button>
        </form>
    </div>
  )
}

export default Search
