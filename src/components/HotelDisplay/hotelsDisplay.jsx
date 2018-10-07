import {Component} from 'react'
import PropTypes from 'prop-types'
import {PageTemplate} from '../PageTemplate/pageTemplate.jsx'
import HotelList from '../HotelList/hotelList.jsx'
import './hotelDisplay.scss'

const ResultSummary = ({count=0, searchStr=''}) =>
  <div className='result-summary'>
    <span className='number'>{`${count} `}</span>
    <span className='description'>hotels in</span>
    <span className='region'>{` ${searchStr}`}</span>
  </div>

const SortDropDown = ({options=[], onChange=f=>f, value='', label=''}) =>
  <div>
    <label className='sorting-label'>Sort by</label>
    <select className='sorting' defaultValue="default" onChange={onChange}>
      <option value='default' disabled hidden>**select**</option>
      {options.map((item, index) =>
        <option key={index} value={item[value]}>{item[label]}</option>)}
    </select>
  </div>

const HotelsResult = ({searchResults=[], searchStr='', sortTypes=[], sortResult=f=>f}) =>
  <div>
    <div className='result-header'>
      <ResultSummary
        count={searchResults.length}
        searchStr={searchStr}/>
      <SortDropDown
        options={sortTypes}
        onChange={sortResult}
        value='sortType'
        label='sortDescription'/>
    </div>
    <HotelList hotels={searchResults}/>
  </div>


export default class HotelDisplay extends Component{
  componentDidMount(){
    const {fetchSearchResult, searchStr} = this.props
    fetchSearchResult(searchStr)
  }
  sortResult = (event) => {
    this.props.sortSearchResult(event.target.value)
  }
  render(){
    const {isloading, isLoadSearchResultError, loadSearchResultError, searchResults, sortTypes} = this.props
    const fakeSearchStr = 'Sydney'
    return(
      <PageTemplate>
        <section id='hotels'>
          {isloading?
            <div>Loading ...</div>
            :<HotelsResult
              searchResults={searchResults}
              searchStr={fakeSearchStr}
              sortTypes={sortTypes}
              sortResult={this.sortResult}/>
          }
          {isLoadSearchResultError?
            <div className='alert alert-danger'>{`Failed to load results with error: ${loadSearchResultError}`}</div>
            : null}
        </section>
      </PageTemplate>
    )
  }
}

ResultSummary.propTypes = {
  count: PropTypes.number,
  searchStr: PropTypes.string
}

SortDropDown.propTypes = {
  sortTypes: PropTypes.array,
  onChange: PropTypes.func
}

HotelsResult.propTypes = {
  searchStr: PropTypes.string,
  searchResults: PropTypes.array,
  sortResult:PropTypes.func,
  sortTypes: PropTypes.array
}

HotelDisplay.propTypes = {
  searchResults: PropTypes.array,
  sortTypes: PropTypes.array,
  searchStr: PropTypes.string,
  isloading: PropTypes.bool,
  isLoadSearchResultError: PropTypes.bool,
  loadSearchResultError: PropTypes.string
}
