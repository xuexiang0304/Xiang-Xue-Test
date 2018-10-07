import C from '../actions/constants.js'

const initialState = {
  searchStr: '',
  sortType: '',
  searchResults: [],
  isloading: false,
  isLoadSearchResultError: false,
  loadSearchResultError: ''
}

const sortResults = (searchResults, sortType) =>{
  if(sortType == 'PRICE_LOW_HIGH')
    return searchResults.sort((a, b) => a.price - b.price)
  else if(sortType == 'PRICE_HIGH_LOW')
    return searchResults.sort((a, b) => b.price - a.price)
  else
    return searchResults
}

export const searchHotels = (state=initialState, action) => {
  switch (action.type) {
  case C.LOAD_SEARCH_RESULTS:
    return {...state,
      searchStr: action.searchStr,
      isloading: true,
      searchResults: [],
      isLoadSearchResultError: false,
      loadSearchResultError: ''}
  case C.LOAD_SEARCH_RESULTS_SUCCESS:
    return {...state,
      isloading: false,
      searchResults: action.searchResults}
  case C.LOAD_SEARCH_RESULTS_ERROR:
    return {...state,
      isLoadSearchResultError: true,
      loadSearchResultError: action.loadSearchResultError}
  case C.SORT_SEARCH_RESULTS:
    return {...state,
      sortType: action.sortType,
      searchResults: sortResults([...state.searchResults], action.sortType)}
  default:
    return state
  }
}
