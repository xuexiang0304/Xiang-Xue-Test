import PropTypes from 'prop-types'
import './thumbWPromotion.scss'

export const ThumbImgWPromotion = ({imgLink = '', promotion='', className=''}) =>
  <div className={`thumbnail ${className}`}>
    {promotion != ''? <div className='label-promotion'>{promotion}</div>: null}
    <img alt='Hotel Image' className='img-thumbnail' src={imgLink}/>
  </div>

ThumbImgWPromotion.propTypes = {
  imgLink: PropTypes.string,
  promotion: PropTypes.string,
  className: PropTypes.string
}
