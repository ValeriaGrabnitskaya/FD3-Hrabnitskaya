import React from 'react';
import PropTypes from 'prop-types';

import './GoodItem.css';

class GoodItem extends React.Component {

  rowSelected = () => {
    const good = this.props.good;
    this.props.rowWasSelected(good.code)
  }

  onEditRow = (e) => {
    e.stopPropagation();
    this.props.editSelectedRow(this.props.good)
  }

  onDeleteRow = (e) => {
    const good = this.props.good;
    e.stopPropagation();
    this.props.deleteSelectedRow(good.code)
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
          <input type='button' disabled={this.props.isFromChanged} className={this.props.isFromChanged ? 'Disable' : 'Input'} value='Edit' onClick={this.onEditRow} />
          <input type='button' disabled={this.props.isFromChanged} className={this.props.isFromChanged ? 'Disable' : 'Input'} value='Delete' onClick={this.onDeleteRow} />
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
  deleteSelectedRow: PropTypes.func.isRequired,
  editSelectedRow: PropTypes.func.isRequired,
  isFromChanged: PropTypes.bool.isRequired
}

export default GoodItem;
