import React, {Component} from 'react'

class Prices extends Component {
  state = {
    currency: 'USD'
  }

  render () {
    let list = '';
    if (this.state.currency === 'USD') {
      const {USD} = this.props.values.bpi;
      list = (
        <ul className='list-group'>
          <li className='list-group-item'>
            Bitcoin Rate for {USD.description}: <span className='badge badge-primary'>{USD.code}</span> <strong>{USD.rate}</strong>
          </li>
        </ul>
      );
    } else if (this.state.currency === 'GBP') {
      const {GBP} = this.props.values.bpi;
      list = (
        <ul className='list-group'>
          <li className='list-group-item'>
            Bitcoin Rate for {GBP.description}: <span className='badge badge-primary'>{GBP.code}</span> <strong>{GBP.rate}</strong>
          </li>
        </ul>
      );
    } else if (this.state.currency === 'EUR') {
      const {EUR} = this.props.values.bpi;
      list = (
        <ul className='list-group'>
          <li className='list-group-item'>
            Bitcoin Rate for {EUR.description}: <span className='badge badge-primary'>{EUR.code}</span> <strong>{EUR.rate}</strong>
          </li>
        </ul>
      );
    }

    return(
      <div>
        {list}
        <br />
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
      </div>
    );
  }
}

export default Prices;