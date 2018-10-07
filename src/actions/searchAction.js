import fetch from 'cross-fetch'
import C from './constants.js'

export const loadSearchResult = (searchStr) => ({
  type: C.LOAD_SEARCH_RESULTS,
  searchStr
})

export const loadSearchResultSuccess = (searchResults) => ({
  type: C.LOAD_SEARCH_RESULTS_SUCCESS,
  searchResults
})

export const loadSearchResultError = (loadSearchResultError) => ({
  type: C.LOAD_SEARCH_RESULTS_ERROR,
  loadSearchResultError
})

export const sortSearchResult = (sortType) => ({
  type: C.SORT_SEARCH_RESULTS,
  sortType
})

export const fetchSearchResult = (searchStr) => {
  return dispatch => {
    dispatch(loadSearchResult(searchStr))
    return fetch('../data/mockSearchResult.json'
    ).then(
      response => response.json(),
      error => dispatch(loadSearchResultError(error))
    ).then(json => dispatch(loadSearchResultSuccess(json))
    )
  }
}
