import Rate from '../../src/components/Rate/rate.jsx'
import {shallow} from 'enzyme'

describe("<Rate/> UI Component", () => {
  test("rendering default Rate", () =>
    expect(
      shallow(<Rate/>)
        .find('i')
        .length
    ).toBe(0))

  test("rendering default star rate", ()=>
    expect(
      shallow(<Rate ratingType='star' fullMark={5}/>)
        .find('i.far.fa-star')
        .length
    ).toBe(5))

  test("rendering default self rate", ()=>
    expect(
      shallow(<Rate ratingType='self' fullMark={5}/>)
        .find('i.far.fa-circle')
        .length
    ).toBe(5))

  test("rendering half star rate", ()=>
    expect(
      shallow(<Rate rating={0.5} ratingType='star'/>)
        .find('i.fas.fa-star-half-alt')
        .length
    ).toBe(1))

  test("rendering 4 full star rate", ()=>
    expect(
      shallow(<Rate rating={4} ratingType='star' fullMark={5}/>)
        .find('i.fas.fa-star')
        .length
    ).toBe(4))

  test("rendering 1 empty star rate", ()=>
    expect(
      shallow(<Rate rating={4} ratingType='star' fullMark={5}/>)
        .find('i.far.fa-star')
        .length
    ).toBe(1))

  test("rendering 4 full circle rate", ()=>
    expect(
      shallow(<Rate rating={4} ratingType='self' fullMark={5}/>)
        .find('i.fas.fa-circle')
        .length
    ).toBe(4))

  test("rendering 1 empty star rate", ()=>
    expect(
      shallow(<Rate rating={4} ratingType='self' fullMark={5}/>)
        .find('i.far.fa-circle')
        .length
    ).toBe(1))
})
