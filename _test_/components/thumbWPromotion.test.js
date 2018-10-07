import {ThumbImgWPromotion} from '../../src/components/ThumbnailImgWPromotion/thumbImgWPromotion.jsx'
import {shallow} from 'enzyme'

describe("<ThumbImgWPromotion/> UI Component", () => {
  test("rendering default <ThumbImgWPromotion/>", () => {
    expect(shallow(<ThumbImgWPromotion/>)
      .find('.label-promotion')
      .length
    ).toBe(0)
  })

  test("rendering with promotion", () => {
    expect(shallow(<ThumbImgWPromotion promotion="red hot"/>)
      .find('.label-promotion')
      .text()
    ).toBe("red hot")
  })

  test("rendering with class name ", () => {
    expect(shallow(<ThumbImgWPromotion className="test"/>)
      .find('div.thumbnail.test')
      .length
    ).toBe(1)
  })

  test("rendering with imgLink", () => {
    const wrapper = shallow(<ThumbImgWPromotion imgLink="test link"/>).find('img')
    expect(wrapper.props().src).toBe("test link")
  })
})
