import React from 'react'
import search from '../../assets/search.svg'

const Search = () => {
  return (
    <form className='formWrapper'>
      <img src={search} alt="A search image" />
      <input type="search" id='search' placeholder='Search GitHub username...'/>
      <button className='search'>Search</button>
    </form>
  )
}

export default Search
