import {SortDropDown} from '../../src/components/HotelDisplay/hotelsDisplay.jsx'
import {shallow} from 'enzyme'

describe("<SortDropDown/> UI Component", () => {
  let _options
  let _onChange
  beforeAll(()=>{
    _options = [{
                label:"Test",
                value: "test"
              },{
                label:"Test",
                value: "test2"
              }];
    _onChange = jest.fn()
  })
  test("rendering default <SortDropDown/>", () =>
    expect(
      shallow(<SortDropDown/>)
        .find('option')
        .length
    ).toBe(1))

  test("rendering with options <SortDropDown/>", () =>
    expect(
      shallow(<SortDropDown options={_options}/>)
        .find('option')
        .length
    ).toBe(_options.length+1))
})
