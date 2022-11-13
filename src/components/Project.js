// import photos from /images for cards
import quiz from '../images/quiz-image.png'
import weather from '../images/weather.png'
import hikamp from '../images/hikamp.png'
import nps from '../images/nps.png'
import notetaker from '../images/notetaker.png'
import textedit from '../images/text-editor.png'
import { FaGithub } from 'react-icons/fa'

import '../styles/Project.scss'

const Project = () => {
  return (
    <div className='project-container'>
         <a className="project-card" href='https://hikamp.herokuapp.com/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>HiKamp</h4>
            <a className='hide' href='https://github.com/stevecalla/hiKamp' target='blank'>
            <FaGithub /><span className="git-text">Repo</span></a></header>
            <img className="image" src={hikamp} alt="hikamp"></img>
        </a>
        <a className="project-card" href='https://drewlovato.github.io/project1-nationalparks/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>National Parks</h4>
            <a className='hide' href='https://github.com/drewlovato/project1-nationalparks' target='blank'>
            <FaGithub /><span className="git-text">Repo</span></a></header>
            
            <img className="image" src={nps} alt="national parks"></img>
        </a>
        <a className="project-card" href='https://rodbennett.github.io/06-weather-app-challenge/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>Weather Forecast</h4>
            <a className='hide' href='https://github.com/RodBennett/06-weather-app-challenge' target='blank'>
            <FaGithub /><span className="git-text">Repo</span></a></header>
            <img className="image" src={weather} alt="weather"></img>
        </a>
        <a className="project-card" href='https://rodbennett.github.io/04-coding-mini-quiz/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>JS Coding Quiz</h4>
            <a className='hide' href='https://github.com/RodBennett/04-coding-mini-quiz' target='blank'>
            <FaGithub /><span className="git-text">Repo</span></a></header>
            <img className="image" src={quiz} alt="coding quiz"></img>
        </a>
        <a className="project-card" href='https://daily-notetaker.herokuapp.com/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>Daily Notetaker</h4>
            <a className='hide' href='https://github.com/RodBennett/11-daily-notetaker-express' target='blank'>
            <FaGithub /><span className="git-text">Repo</span></a></header>
            <img className="image" src={notetaker} alt="daily notetaker"></img>
        </a>
        <a className="project-card" href='https://pwa-text-editor-rb.herokuapp.com/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>Text Editor</h4>
            <a className='hide' href='https://github.com/RodBennett/19-pwa-text-editor' target='blank'>
            <FaGithub /><span className="git-text">repo</span></a></header>
            <img className="image" src={textedit} alt="text editor"></img>
        </a>
    </div>
  )
}

export default Project
