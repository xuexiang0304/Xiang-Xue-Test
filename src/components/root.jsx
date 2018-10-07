import { Component } from 'react'
import { Provider } from 'react-redux'
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home/home.jsx'
import HotelList from '../containers/HotelDisplay.js'
import Page404 from './NotFound404/NotFound404.jsx'

const Root = ({ store }) => (
  <Provider store={store}>
  	<Router>
    	<div className="wrapper">
    		<Switch>
      			<Route path="/" component={HotelList} />
      			<Route path="/searchresults?ss=:searchcity" component={HotelList}/>
            <Route component={Page404}/>
      		</Switch>
      	</div>
    </Router>
  </Provider>
)

export default  Root
