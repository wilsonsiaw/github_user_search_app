import React from 'react'
import './Card.css'
import oval from '../../assets/Oval.svg'
import pin from '../../assets/location.svg'
import link from '../../assets/link.svg'
import twitter from '../../assets/twitter.svg'
import github from '../../assets/github.svg'
import { useTheme } from '../../context/ThemeContextProvider'
import {format, parseISO} from 'date-fns'

const Card = ( {githubUser} ) => {

  const { isDarkMode } = useTheme()

  return (
    <div className={`cardWrapper ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className={`cardTop ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        {!githubUser?.avatar_url ? (<img src={oval} alt="A picture of a black cat in an oval" />) 
        : (<img src={githubUser?.avatar_url} alt="A picture ot the github user" />)}
        <div className="topText">
          <h3>{githubUser?.name === null ? "The Octocat" : githubUser?.name}</h3>
          <h4>{githubUser?.login === null ? "The Octocat" : githubUser?.login}</h4>
          <h4>{githubUser && `Joined ${format(parseISO(githubUser?.created_at), 'd MMM yyyy')}`}</h4>
        </div>
      </div>
      <p className={`para ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {githubUser?.bio === null ? "No GitHub Bio" : githubUser?.bio}
      </p>
      <div className={`stats ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <small>Repos</small>
        <small>Followers</small>
        <small>Following</small>
        <h5>{githubUser?.public_repos === null ? "No GitHub Repos" : githubUser?.public_repos}</h5>
        <h5>{githubUser?.followers === null ? "No GitHub Followers" : githubUser?.followers}</h5>
        <h5>{githubUser?.following === null ? "Not Following" : githubUser?.following}</h5>
      </div>
      <div className={`icons ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <img src={pin} alt="location pin icon" id='icon'/>
        <p>{githubUser?.location === null ? "Not Following" : githubUser?.location}</p>
        <img src={link} alt="a link icon" />
        <p>{githubUser?.public_gists === " " ? "No GitHub Blog" : githubUser?.public_gists}</p>
        <img src={twitter} alt="a twitter bird icon" />
        <p>{githubUser?.twitter_username === null ? "No Twitter Username" : githubUser?.twitter_username}</p>
        <img src={github} alt="an office building icon" />
        <p>{githubUser?.company === null ? "No Company" : githubUser?.company}</p>
      </div>
    </div>
  )
}

export default Card
