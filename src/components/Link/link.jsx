import PropTypes from 'prop-types'

export const Link = ({className='', onClick, text=''}) =>
  <a className={className} onClick={onClick}>{text}</a>

Link.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string
}
