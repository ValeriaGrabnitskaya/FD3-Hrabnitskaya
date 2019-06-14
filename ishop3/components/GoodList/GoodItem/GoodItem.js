import React from 'react';
import PropTypes from 'prop-types';

import './GoodItem.css';

class GoodItem extends React.Component {
  
  rowSelected = () => {
    const good = this.props.good;
    this.props.rowWasSelected(good.code)
  }

  deleteRow = (e) => {
    const good = this.props.good;
    e.stopPropagation();
    this.props.deleteSelecredRow(good.code)
  }

  render() {
    const good = this.props.good;
    return (
      <tr className={this.props.isSelected ? 'GoodRowSelected' : 'GoodRow'} onClick={this.rowSelected}>
        <td className='GoodItem'>{good.name}</td>
        <td className='GoodItem'>{good.cost}</td>
        <td className='GoodItem'>{good.goodUrl}</td>
        <td className='GoodItem'>{good.numbers}</td>
        <td className='GoodItem'>
          <input type='button' className='DeleteInput' value='Delete' onClick={this.deleteRow}/>
        </td>
      </tr>
    )
  }
}

GoodItem.propTypes = {
  // good: PropTypes.objectOf(
  //   PropTypes.shape({
  //     code: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //     cost: PropTypes.number.isRequired,
  //     goodUrl: PropTypes.string.isRequired,
  //     pictureName: PropTypes.string.isRequired,
  //     numbers: PropTypes.number.isRequired
  //   })
  // ).isRequired,
  good: PropTypes.object.isRequired,
  rowWasSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  deleteSelecredRow: PropTypes.func.isRequired
}

export default GoodItem;
