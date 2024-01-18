import { useContext, useState } from 'react'
import './App.css'
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { ThemeContext, useTheme } from './context/ThemeContextProvider'
import axios from 'axios'

function App() {

  // import and use the theme from the 
  // Theme Context Provider file
  const { isDarkMode, toggleTheme } = useTheme();

  // GETTING DATA FROM AN API
  // create state 
  const [githubUser, setGithubUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // create a function that gets the data
  const getGithubUser = async (user) => {
    // make a call to the API
    try {
      setLoading(true)
      const response = await axios.get(`https://api.github.com/users/${user}` , {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      }
    });
    // handle the data if request is successful
    const data = await response.data;
    setLoading(false);
    setGithubUser(data);
    // handle the error if response fails
    } catch (err) {
      console.log(err);
      setError("No results", err);
    }
  }

  return (
    <div className={`appBody ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
      <Header toggleTheme={toggleTheme}/>
      <Search getGithubUser={getGithubUser}/>
      <Card githubUser={githubUser}/>
    </div>
  )
}

export default App
