import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header">
    <li className="route-link">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>
    <li className="route-link">
      <Link to="/about" className="nav-link">
        About
      </Link>
    </li>
  </nav>
)
export default Header
