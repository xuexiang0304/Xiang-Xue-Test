import C from '../../../src/actions/constants.js'
import configureStore from '../../../src/configureStore'
import {loadSearchResult,
  loadSearchResultSuccess,
  loadSearchResultError,
  sortSearchResult,
  fetchSearchResult} from '../../../src/actions/searchAction.js'

describe("request load search results", () => {
  let store

  beforeAll(() => {
    store = configureStore()
    store.dispatch(loadSearchResult("Sydney"))
  })

  test("should set search string", () =>
    expect(store.getState().searchHotels.searchStr).toBe("Sydney"))

  test("should is loading", () =>
    expect(store.getState().searchHotels.isloading).toBe(true))

  test("should not have errors", () =>
    expect(store.getState().searchHotels.isLoadSearchResultError).toBe(false))

  test("should have no error messages", () =>
    expect(store.getState().searchHotels.loadSearchResultError).toBe(''))
})

describe("load search results success", () => {
  let store

  beforeAll(() => {
    store = configureStore()
    store.dispatch(loadSearchResultSuccess(_testHotels))
  })

  test("should is not loading", () =>
    expect(store.getState().searchHotels.isloading).toBe(false))

  test("should have 5 records", () =>
    expect(store.getState().searchHotels.searchResults.length).toBe(5))

  test("should is an array", () =>
    expect(Array.isArray(store.getState().searchHotels.searchResults)).toBe(true))

  test("should contains multiple objects", () =>
    expect(typeof(store.getState().searchHotels.searchResults[0])).toBe("object"))
})

describe("load search results error", () => {
  let store

  beforeAll(() => {
    store = configureStore()
    store.dispatch(loadSearchResultError("error"))
  })

  test("should is loading error", () =>
    expect(store.getState().searchHotels.isLoadSearchResultError).toBe(true))

  test("should have error message", () =>
    expect(store.getState().searchHotels.loadSearchResultError).toBe("error"))
})

describe("sort search results ascending by price", () => {
  let store
  let lowestPrice = 227
  let highestPrice = 535

  beforeAll(() => {
    let state = {
      searchHotels:{
        searchResults: _testHotels
      }
    }
    store = configureStore(state)
    store.dispatch(sortSearchResult("PRICE_LOW_HIGH"))
  })

  test("should sortType is PRICE_LOW_HIGH", () =>
    expect(store.getState().searchHotels.sortType).toBe("PRICE_LOW_HIGH"))

  test("should the first object has the lowest price", () =>
    expect(store.getState().searchHotels.searchResults[0].price).toBe(227))

  test("should the last object has the hight price", () =>
      expect(store.getState().searchHotels
            .searchResults[store.getState().searchHotels.searchResults.length-1]
            .price).toBe(535))
})

describe("sort search results descending by price", () => {
  let store
  let lowestPrice = 227
  let highestPrice = 535

  beforeAll(() => {
    let state = {
      searchHotels:{
        searchResults: _testHotels
      }
    }
    store = configureStore(state)
    store.dispatch(sortSearchResult("PRICE_HIGH_LOW"))
  })

  test("should sortType is PRICE_HIGH_LOW", () =>
    expect(store.getState().searchHotels.sortType).toBe("PRICE_HIGH_LOW"))

  test("should the first object has the highestprice", () =>
    expect(store.getState().searchHotels.searchResults[0].price).toBe(535))

  test("should the last object has the lowest price", () =>
      expect(store.getState().searchHotels
            .searchResults[store.getState().searchHotels.searchResults.length-1]
            .price).toBe(227))
})
