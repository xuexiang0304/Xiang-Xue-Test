import PropTypes from 'prop-types'
import './pricePanel.scss'

const PricePanel = ({price=0, saving=0, currency='AUD', currencySign='$', className=''}) =>
  <div className={`price-panel ${className}`}>
    <div className='price-label'>{`1 night total(${currency})`}</div>
    <div>
      <span className='currency-sign'>{`${currencySign}`}</span>
      <span className='price'>{price}</span>
    </div>
    {saving == 0 ?<div className='saving'/>: <div className='saving'>{`Save ${currencySign + saving} ~`}</div>}
  </div>

export default PricePanel

PricePanel.propTypes = {
  price: PropTypes.number,
  saving: PropTypes.number,
  currency: PropTypes.string,
  currencySign: PropTypes.string,
  className: PropTypes.string
}
