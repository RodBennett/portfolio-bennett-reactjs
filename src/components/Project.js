// import photos from /images for links
import quiz from '../images/quiz-image.png'
import weather from '../images/weather.png'
import hikamp from '../images/hikamp.png'
import nps from '../images/nps.png'
import notetaker from '../images/notetaker.png'
import textedit from '../images/text-editor.png'


import '../styles/Project.css'

const Project = () => {
  return (
    <div className='project-container'>
        <a className="project-link" href='https://rodbennett.github.io/04-coding-mini-quiz/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>JS Coding Quiz</h4></header>
            <img className="image" src={quiz} alt="coding quiz"></img>
        </a>
        <a className="project-link" href='https://rodbennett.github.io/06-weather-app-challenge/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>Weather Forecast App</h4></header>
            <img className="image" src={weather} alt="weather"></img>
        </a>
        <a className="project-link" href='https://hikamp.herokuapp.com/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>HiKamp</h4></header>
            <img className="image" src={hikamp} alt="hikamp"></img>
        </a>
        <a className="project-link" href='https://drewlovato.github.io/project1-nationalparks/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>National Park Search</h4></header>
            <img className="image" src={nps} alt="national parks"></img>
        </a>
        <a className="project-link" href='https://daily-notetaker.herokuapp.com/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>Daily Notetaker</h4></header>
            <img className="image" src={notetaker} alt="daily notetaker"></img>
        </a>
        <a className="project-link" href='https://pwa-text-editor-rb.herokuapp.com/' target='blank'>
            <header className='project-header'>
            <h4 className='project-text'>Text Editor</h4></header>
            <img className="image" src={textedit} alt="text editor"></img>
        </a>
    </div>
  )
}

export default Project
