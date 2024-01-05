import { useState } from 'react'
import './App.css'
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Card from './components/Card/Card'

function App() {

  return (
    <div className='appBody'>
      <Header />
      <Search />
      <Card />
    </div>
  )
}

export default App
