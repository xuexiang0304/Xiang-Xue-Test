import PropTypes from 'prop-types'
import './nav.scss'

export const Navbar = ({children}) =>
  <div className="navbar">
    <div className="logo">
      <img src="/assets/image/qantas-logo.png"/>
    </div>
    {children}
  </div>

Navbar.propTypes = {
  children: PropTypes.node
}
