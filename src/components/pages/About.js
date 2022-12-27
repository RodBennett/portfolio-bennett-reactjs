import '../../styles/About.scss'
import image from '../../images/profile.jpeg'


const About = () => {
  return (
    <div className='about-container'>
       <p className="about-header">About</p>
      <img className="profile-pic"src={image} alt="Profile"></img>
      <p className='profile-text'> <br></br>
        Hello! Welcome to my coding portfolio. <br></br> <br></br>
        My name is Rod Bennett and I have recently graduated from the University of Denver's 6-month bootcamp. 
        During these last few months, I have developed
        a strong passion for web and software development. <br></br> <br></br>
        This portfolio has been created in Reactjs to showcase some of the web development work
        I have done in bootcamp.  If you click on the "portfolio" tab above, you can
        see 6 projects that we did in our class.  The first 3 projects, "Team Handbook", "HiKamp", and 
        "National Park", were works of collaboration, while the other 3 were done solo. <br></br> <br></br>
        I have a particular interest in back-end development but ultimately would like to work
        in the field as a full-stack developer to help small-business owners get started. <br></br> <br></br>
        Please enjoy the tour of the apps, and if you have any questions or comments, then you
        can find my contact information of the "Contact" page. <br></br> <br></br>
        Thanks for visiting! <br></br> <br></br>
        - Rod 
        </p>
    </div>
  )
}

export default About
