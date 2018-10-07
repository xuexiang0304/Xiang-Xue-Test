import PropTypes from 'prop-types'

export const Link = ({className='', onClick=f=>f, text=''}) =>
  <a className={className} onClick={onClick}>{text}</a>

Link.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string
}
