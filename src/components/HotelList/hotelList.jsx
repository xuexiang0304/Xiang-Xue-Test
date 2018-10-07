import PropTypes from 'prop-types'
import Hotel from '../HotelPanel/hotelPanel.jsx'

const HotelList = ({hotels=[]}) =>
  <div>
    {hotels.map((hotel, index) => <Hotel key={index} hotelInfo={hotel}/>)}
  </div>

export default HotelList

HotelList.propTypes = {
  hotels: PropTypes.array
}
