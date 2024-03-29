
import '../../styles/Resume.scss'


const Resume = () => {
  return (
    <div className='resume-container'>
      <p className="resume-header">Resume</p>
      <h2 className='resume-link'>See my<a href='https://drive.google.com/file/d/1cZdm8YUZn2HabD7xvrkb8kND1gVEq4G0/view?usp=share_link' target='blank'>resume</a>here</h2>
      <h2 className='resume-headers'>Front-end Proficiencies:</h2>
        <ul className='resume-list'>
          <li className='resume-items'>HTML</li>
          <li className='resume-items'>CSS</li>
          <li className='resume-items'>JavaScript</li>
          <li className='resume-items'>Reactjs</li>
          <li className='resume-items'>Bootstrap/Semantic UI/React Bootstrap</li>
          <li className='resume-items'>Responsive Design</li>
          <li className='resume-items'>Jquery</li>
          </ul>
      <h2 className='resume-headers'> Back-end Proficiencies</h2>
        <ul className='resume-list'>
          <li className='resume-items'>APIs</li>
          <li className='resume-items'>MySQL, Sequelize</li>
          <li className='resume-items'>GraphQL</li>
          <li className='resume-items'>NoSQL</li>
          <li className='resume-items'>MongoDB / Mongoose</li>
          <li className='resume-items'>IndexedDB</li>
          <li className='resume-items'>Expressjs</li>
          <li className='resume-items'>Nodejs</li>
          <li className='resume-items'>REST routing</li>
        </ul>
        
    </div>
  )
}

export default Resume
