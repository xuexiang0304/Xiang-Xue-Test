import PropTypes from 'prop-types'
import {ThumbImgWPromotion} from '../ThumbnailImgWPromotion/thumbImgWPromotion.jsx'
import PricePanel from '../Price/pricePanel.jsx'
import {Link} from '../Link/link.jsx'
import Rate from '../Rate/rate.jsx'
import './hotelPanel.scss'

const HotelDetailInfo = ({hotelInfo={}}) =>
  <div className='hotel-detail'>
    <div className='hotel-detail-basic'>
      <div className='hotel-detail-title-rating'>
        <div className='hotel-detail-title'>{hotelInfo.title}</div>
        <Rate
          className='hotel-detail-rating'
          rating={hotelInfo.rating}
          ratingType={hotelInfo.ratingType}
          fullMark={5}/>
      </div>
      <div className='hotel-detail-address'>{hotelInfo.address}</div>
      <Link className='hotel-detail-roomName' text={hotelInfo.roomName}/>
      <div className='freeCancellation'>{hotelInfo.freeCancellation?'Free Cancellation':''}</div>
    </div>
    <PricePanel
      price={hotelInfo.price}
      saving={hotelInfo.savings}
      className='hotel-detail-price'/>
  </div>

const Hotel = ({hotelInfo={}}) =>
  <div className='hotel-panel'>
    <ThumbImgWPromotion
      imgLink={hotelInfo.image}
      promotion={hotelInfo.promotion}
      className='hotel-thumbnail'/>
    <HotelDetailInfo hotelInfo={hotelInfo}/>
  </div>

export default Hotel

HotelDetailInfo.propsTypes = {
  hotelInfo: PropTypes.object
}

Hotel.propsTypes = {
  hotelInfo: PropTypes.object
}
