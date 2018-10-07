import PropTypes from 'prop-types'
import {Navbar} from '../Nav/nav.jsx'
import './pageTemplate.scss'

export const PageTemplate = ({children}) =>
  <div className="page">
    <Navbar/>
    {children}
  </div>

PageTemplate.propTypes = {
  children: PropTypes.node
}
