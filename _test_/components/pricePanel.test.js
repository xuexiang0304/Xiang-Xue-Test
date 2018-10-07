import PricePanel from '../../src/components/Price/pricePanel.jsx'
import {shallow} from 'enzyme'

describe("<PricePanel/> UI Component", () => {
  test("rendering default <PricePanel/>", () =>
    expect(
      shallow(<PricePanel/>)
      .find('.price-panel')
      .length
    ).toBe(1))

  test("rendering with savings", () =>
    expect(
      shallow(<PricePanel saving={30}/>)
      .find('div.saving')
      .text()
    ).toBe("Save $30 ~"))

  test("rendering without savings", () =>
    expect(
      shallow(<PricePanel/>)
      .find('div.saving')
      .text()
    ).toBe(""))

  test("rendering price 100", () =>
    expect(
      shallow(<PricePanel price={100}/>)
      .find('span.price')
      .text()
    ).toBe("100"))
})
