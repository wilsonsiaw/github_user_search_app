import React from 'react'
import './Card.css'
import oval from '../../assets/Oval.svg'
import pin from '../../assets/location.svg'
import link from '../../assets/link.svg'
import twitter from '../../assets/twitter.svg'
import github from '../../assets/github.svg'
import { useTheme } from '../../context/ThemeContextProvider'

const Card = () => {

  const { isDarkMode } = useTheme()

  return (
    <div className={`cardWrapper ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className={`cardTop ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <img src={oval} alt="A picture of a black cat in an oval" />
        <div className="topText">
          <h3>The Octocat</h3>
          <h4>@octocat</h4>
          <h4>Joined 25 Jan 2011</h4>
        </div>
      </div>
      <p className={`para ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
      </p>
      <div className={`stats ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <small>Repos</small>
        <small>Followers</small>
        <small>Following</small>
        <h5>8</h5>
        <h5>3938</h5>
        <h5>9</h5>
      </div>
      <div className={`icons ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <img src={pin} alt="location pin icon" id='icon'/>
        <p>San Francisco</p>
        <img src={link} alt="a link icon" />
        <p>https://github.blog</p>
        <img src={twitter} alt="a twitter bird icon" />
        <p>Not available</p>
        <img src={github} alt="an office building icon" />
        <p>@github</p>
      </div>
    </div>
  )
}

export default Card
