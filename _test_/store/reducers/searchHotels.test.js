import C from '../../../src/actions/constants.js'
import deepFreeze from 'deep-freeze'
import {searchHotels} from '../../../src/reducers/searchReducer.js'

describe("searchHotels Reducer", () => {

  test("REQUEST LOAD SEARCH RESULTS success", () => {
    const state = {}
    const action = {
      type: C.LOAD_SEARCH_RESULTS,
      searchStr: 'Sydney'
    }
    deepFreeze(state)
    deepFreeze(action)
    const results = searchHotels(state, action)
    expect(results).toEqual({
      searchStr: 'Sydney',
      searchResults: [],
      isloading: true,
      isLoadSearchResultError: false,
      loadSearchResultError: ''
    })
  })

  test("LOAD SEARCH RESULTS SUCCESS success", () => {
    const state = {}
    const action = {
      type: C.LOAD_SEARCH_RESULTS_SUCCESS,
      searchResults: _testHotels
    }
    deepFreeze(state)
    deepFreeze(action)
    const results = searchHotels(state, action)
    expect(results).toEqual({
      searchResults: _testHotels,
      isloading: false
    })
  })

  test("LOAD SEARCH RESULTS ERROR success", () => {
    const state = {}
    const action = {
      type: C.LOAD_SEARCH_RESULTS_ERROR,
      isLoadSearchResultError: true,
      loadSearchResultError: 'error message'
    }
    deepFreeze(state)
    deepFreeze(action)
    const results = searchHotels(state, action)
    expect(results).toEqual({
      isLoadSearchResultError: true,
      loadSearchResultError: 'error message'
    })
  })

  test("SORT SEARCH RESULTS ASC success", () => {
    const state = {searchResults: _testHotels}
    const action = {
      type: C.SORT_SEARCH_RESULTS,
      sortType: 'PRICE_LOW_HIGH'
    }
    deepFreeze(state)
    deepFreeze(action)
    const results = searchHotels(state,action)
    expect(results.searchResults[0].price).toBe(227)
  })

  test("SORT SEARCH RESULTS DESC success", () => {
    const state = {searchResults: _testHotels}
    const action = {
      type: C.SORT_SEARCH_RESULTS,
      sortType: 'PRICE_HIGH_LOW'
    }
    deepFreeze(state)
    deepFreeze(action)
    const results = searchHotels(state,action)
    expect(results.searchResults[0].price).toBe(535)
  })

})
