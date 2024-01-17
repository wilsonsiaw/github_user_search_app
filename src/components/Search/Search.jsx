import React, { useState } from 'react'
import './Search.css'
import search from '../../assets/search.svg'
import { useTheme } from '../../context/ThemeContextProvider'

const Search = ({getGithubUser}) => {

  // get the theme
  const { isDarkMode } = useTheme()

  // create a controlled form input
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (!query) {
      alert('Field is required');
    } else {
      getGithubUser(query);
      setQuery('');
    }
  }
  
  return (
    <div className="formWrapper">
        <div className={`form ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <img src={search} alt="A search image" className='searchImg'/>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" id='search' 
            placeholder='Search GitHub username...' className={`input ${isDarkMode ? 'dark-mode' : 'light-mode'}`}/>
            <button className='searchBtn' onClick={handleSubmit}>Search</button>
        </div>
    </div>
  )
}

export default Search
