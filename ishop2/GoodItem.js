var GoodItem = React.createClass({

  displayName: 'GoodItem',

  propTypes: {
    code: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    cost: React.PropTypes.number.isRequired,
    goodUrl: React.PropTypes.string.isRequired,
    pictureName: React.PropTypes.string.isRequired,
    numbers: React.PropTypes.number.isRequired,
    rowWasSelected: React.PropTypes.func.isRequired,
    isSelected: React.PropTypes.bool.isRequired,
    deleteSelecredRow: React.PropTypes.func.isRequired
  },

  rowSelected: function (e) {
    this.props.rowWasSelected(this.props.code)
  },

  deleteRow: function (e) {
    e.stopPropagation();
    this.props.deleteSelecredRow(this.props.code)
  },

  render: function () {
    return React.DOM.tr({
      className: this.props.isSelected ? 'GoodRowSelected' : 'GoodRow',
      onClick: this.rowSelected
    },
      React.DOM.td({ className: 'GoodItem' }, this.props.name),
      React.DOM.td({ className: 'GoodItem' }, this.props.cost),
      React.DOM.td({ className: 'GoodItem' },
        React.DOM.img({ className: 'GoodImage', src: this.props.goodUrl, alt: this.props.pictureName })
      ),
      React.DOM.td({ className: 'GoodItem' }, this.props.numbers),
      React.DOM.td({ className: 'GoodItem' },
        React.DOM.input({ type: 'button', className: 'DeleteInput', value: 'Delete', onClick: this.deleteRow })
      )
    )
  },

});