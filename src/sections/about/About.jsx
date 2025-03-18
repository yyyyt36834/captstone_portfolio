import AboutImage from '../../assets/DSCF1256-1_Original.jpg'
import CV from '../../assets/Yu_Tanaka_Resume.pdf'
import {HiDownload} from 'react-icons/hi'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <p></p>
                <p>
                My first programming experience was in 2014, through a class on Visual Basic at Aoyamagakuin University in Tokyo, Japan.  I went through a couple of jobs that did not have much to do with IT after graduation, but in 2021 I started coding again as a hobby and decided to become a software engineer.  I am currently studying at George Brown College in Toronto, ON for an advanced diploma in Programming and Analysis.
                </p>
                <p>
                I mainly focus on building small applications in Java because I am familier with a Java framwork SpringBoot, but I also build web applications on other language for both front and back ends. Thanks to my experiences of working in offices, I excel at communicating with team members and smoothly delivering projects.
                </p>
                <p>
                Outside of my profession, I spend most of my free time climbing rocks. It's been my biggest hobby for more than 13 years. Feel free to contact me if you are looking for a climbing partner!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About