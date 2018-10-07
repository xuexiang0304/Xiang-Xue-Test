import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from '../configureStore'
import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../components/root.jsx'
import '../assets/sass/theme.scss'

window.React = React
const store = configureStore()

ReactDOM.render(<Root store={store}/>, document.getElementById('app'))
