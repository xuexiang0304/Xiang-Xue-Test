import PropTypes from 'prop-types'

export const Page404 = ({ location }) =>
  <div className ="page-404">
    <h1> Resource not found at '{ location.pathname}' </h1>
  </div>

Page404.propsTypes = {
  location: PropTypes.string
}
