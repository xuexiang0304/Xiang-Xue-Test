import PropTypes from 'prop-types'

const Rate = ({rating=0, ratingType='', className='', fullMark=0}) =>{
  var rateInt = parseInt(rating)
  var emptyCount = parseInt(fullMark - rating)
  return(
    <div className={className}>
      {
        [...Array(rateInt)].map((x, i) =>
          <span key={i}>
            <i className={ratingType == 'star'?'fas fa-star': 'fas fa-circle'}></i>
          </span>
        )
      }
      {
        rating % 1 != 0 ?
          <span>
            <i className={ratingType == 'star'?'fas fa-star-half-alt': 'circle-half'}></i>
          </span>
          :  null
      }
      {
        emptyCount > 0 ?
          [...Array(emptyCount)].map((x, i) =>
            <span key={i}>
              <i className={ratingType == 'star'?'far fa-star': 'far fa-circle'}></i>
            </span>
          )
          : null
      }
    </div>
  )
}

export default Rate

Rate.propTypes = {
  rating: PropTypes.number,
  ratingType: PropTypes.string,
  className: PropTypes.string,
  fullMark: PropTypes.number
}
