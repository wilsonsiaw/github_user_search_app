import React from 'react'
import './Search.css'
import search from '../../assets/search.svg'

const Search = () => {
  return (
    <div className="formWrapper">
        <form className='form'>
            <img src={search} alt="A search image" className='searchImg'/>
            <input type="text" id='search' placeholder='Search GitHub username...'/>
            <button className='searchBtn'>Search</button>
        </form>
    </div>
  )
}

export default Search
