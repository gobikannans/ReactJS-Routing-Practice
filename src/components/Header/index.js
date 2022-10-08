import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <div className="nav-first">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <p className="details">Wave</p>
    </div>
    <div className="nav-details">
      <Link className="details" to="/">
        Home
      </Link>
      <Link className="details" to="/about">
        About
      </Link>
      <Link className="details" to="/contact">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header
