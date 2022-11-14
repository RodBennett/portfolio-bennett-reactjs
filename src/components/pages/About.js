import '../../styles/About.scss'
import image from '../../images/profile.jpeg'


const About = () => {
  return (
    <div className='about-container'>
       <h1 className="section-header"> About Me </h1>
      <img className="profile-pic"src={image} alt="Profile"></img>
      <pre className='profile-text'>
      {'\n'}
        Hello! Welcome to my coding portfolio. {'\n'} 
        {'\n'}
        My name is Rod Bennett and over the last six months I have been learning how to code {'\n'}
        at the University of Denver's bootcamp. During these last few months, I have developed {'\n'} 
        a strong passion for web and software development. {'\n'}
        {'\n'}
        This portfolio has been created in Reactjs to showcase some of the web development work {'\n'}
        I have done in bootcamp.  If you click on the "portfolio" tab above, you can {'\n'}
        see 6 projects that we did in our class.  The first 2 projects,"HiKamp" and{'\n'} 
        "National Park", were works of collaboration, while the other 4 were done solo. {'\n'}
        {'\n'}
        I have a particular interest in back-end development but ultimately would like to work {'\n'}
        in the field as a full-stack developer to help small-business oweners get started.{'\n'}
        {'\n'}
        Please enjoy the tour of the apps, and if you have any questions or comments, then you {'\n'}
        can find my contact information of the "Contact" page. {'\n'}
        {'\n'}
        Thanks for visiting! {'\n'}
        {'\n'}
        - Rod 
      
        </pre>
    </div>
  )
}

export default About
