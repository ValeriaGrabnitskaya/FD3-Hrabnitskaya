import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    client: PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      secondName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired
    }),
  };

  state = {
    client: this.props.client,
  };

  onEditRow = () => { }

  onDeleteRow = () => { }

  render() {

    console.log("MobileClient id=" + this.state.client.id + " render");

    return (
      <tr>
        <td className='ClientAttribute'>{this.state.client.firstName}</td>
        <td className='ClientAttribute'>{this.state.client.secondName}</td>
        <td className='ClientAttribute'>{this.state.client.lastName}</td>
        <td className='ClientAttribute'>{this.state.client.balance}</td>
        <td className='ClientAttribute'>{this.state.client.status}</td>
        <td className='ClientAttribute'>
          <input type='button' className='Input' value='Редактировать' onClick={this.onEditRow} />
        </td>
        <td className='ClientAttribute'>
          <input type='button' className='Input' value='Удалить' onClick={this.onDeleteRow} />
        </td>
      </tr>
    );

  }
}

export default MobileClient