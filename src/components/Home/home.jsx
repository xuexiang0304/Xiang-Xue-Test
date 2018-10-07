import {Component} from 'react'
import PropTypes from 'prop-types'
import './home.scss'
import {PageTemplate} from '../PageTemplate/pageTemplate.jsx'

export default class Home extends Component{
  render(){
    return (
      <PageTemplate className = 'home-nav'>
        <section id="home">
          <div>Home</div>
        </section>
      </PageTemplate>
    )
  }
}

Home.propTypes = {

}
