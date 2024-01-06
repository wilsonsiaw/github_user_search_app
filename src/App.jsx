import { useContext, useState } from 'react'
import './App.css'
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { ThemeContext, useTheme } from './context/ThemeContextProvider'

function App() {

  // import and use the theme from the 
  // Theme Context Provider file
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className={`appBody ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
      <Header toggleTheme={toggleTheme}/>
      <Search />
      <Card />
    </div>
  )
}

export default App
