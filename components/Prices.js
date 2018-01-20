import React, {Component} from 'react'

class Prices extends Component {
  state = {
    currency: 'USD',
  }

  render () {
    const {USD} = this.props.values.bpi;
    return(
      <div>
        {
          USD ?
          <ul className='list-group'>
            <li className='list-group-item'>
              Bitcoin Rate for {USD.description}: <span className='badge badge-primary'>{USD.code}</span> <strong>{USD.rate}</strong>
            </li>
          </ul>
          : <p>Loading...</p>
        }
        <br />
      </div>
    );
  }
}

export default Prices;