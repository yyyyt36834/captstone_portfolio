import Logo from '../../assets/logo.jpg'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
    
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar