import {Navbar} from '../../src/components/Nav/nav.jsx'
import {shallow} from 'enzyme'

describe("<Nav/> UI component", () => {
  test("rendering default Nav", () =>
    expect(shallow(<Navbar/>)
    .find('.navbar')
    .length
  ).toBe(1))
})
