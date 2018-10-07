import {Link} from '../../src/components/Link/link.jsx'
import {shallow} from 'enzyme'

describe("<Link/> UI Component", () => {

  test("rendering default <Link/>", () =>
    expect(
      shallow(<Link/>)
      .find('a')
      .length
    ).toBe(1))

  test("rendering with className <Link/>", () =>
    expect(
      shallow(<Link className="test"/>)
      .find('a.test')
      .length
    ).toBe(1))

  test("rendering with onClick func <Link/>", () =>{
    let _click = jest.fn()

    shallow(<Link onClick={_click}/>)
      .find('a')
      .simulate('click')

    expect(_click).toBeCalled()
  })

  test("rendering with text <Link/>", () =>
    expect(
      shallow(<Link text="test"/>)
      .find('a')
      .text()
    ).toBe("test"))
})
