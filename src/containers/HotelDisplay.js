import { connect } from 'react-redux'
import {fetchSearchResult, sortSearchResult} from '../actions/searchAction'
import Hotels from '../components/HotelDisplay/hotelsDisplay.jsx'

const sortTypes = [{
  'sortType': 'PRICE_HIGH_LOW',
  'sortDescription': 'Price high-low'
},{
  'sortType': 'PRICE_LOW_HIGH',
  'sortDescription': 'Price low-high'
}]

const mapStateToProps = state => ({
  searchStr: state.searchHotels.searchStr,
  searchResults: state.searchHotels.searchResults,
  isloading: state.searchHotels.isloading,
  isLoadSearchResultError: state.searchHotels.isLoadSearchResultError,
  loadSearchResultError: state.searchHotels.loadSearchResultError,
  sortTypes: sortTypes
})

const mapDispatchToProps = (dispatch) => ({
  fetchSearchResult: (searchStr) => dispatch(fetchSearchResult(searchStr)),
  sortSearchResult: (sortType) => dispatch(sortSearchResult(sortType))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotels)
