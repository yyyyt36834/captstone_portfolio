import HeaderImage from '../../assets/IMG_2980_(1).jpg'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Yu Tanaka</h3>
        <p>
          Welcome to my portfolio. I am a full-stack developer with a passion for creating beautiful and functional websites. I am proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB, etc.
        </p>
      </div>
    </header>
  )
}

export default Header