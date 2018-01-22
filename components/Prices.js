import React, {Component} from 'react'

class Prices extends Component {
  state = {
    currency: 'USD'
  }

  render () {
    const { currency } = this.state;
    if (!this.props.values.bpi[currency]) return (<h3>no data for this currency</h3>)
    const { description, rate, code } = this.props.values.bpi[currency] 
    
    return(
      <div>
        <select 
          onChange={e => this.setState({
            currency: e.target.value
          })}
          className='form-control'
        >
          <option value='USD'>USD</option>
          <option value='GBP'>GBP</option>
          <option value='EUR'>EUR</option>
        </select>
        <br />
        <ul className='list-group'>
          <li className='list-group-item'>
            Bitcoin Rate for {description}: <span className='badge badge-primary'>{code}</span> <strong>{rate}</strong>
          </li>
        </ul>
        <br />
      </div>
    );
  }
}

export default Prices;
