import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import { companyEvents } from '../../events';

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

  onEditRow = () => {
    companyEvents.emit('EditClient', this.props.client.id)
  }

  onDeleteRow = () => { 
    companyEvents.emit('DeleteClient', this.props.client.id)
  }

  render() {

    console.log("MobileClient id=" + this.props.client.id + " render");

    return (
      <tr>
        <td className='ClientAttribute'>{this.props.client.firstName}</td>
        <td className='ClientAttribute'>{this.props.client.secondName}</td>
        <td className='ClientAttribute'>{this.props.client.lastName}</td>
        <td className='ClientAttribute'>{this.props.client.balance}</td>
        <td className='ClientAttribute'>{this.props.client.status}</td>
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