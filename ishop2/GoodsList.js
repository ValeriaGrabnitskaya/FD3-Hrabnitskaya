var GoodsList = React.createClass({

  displayName: 'GoodsList',

  propTypes: {
    tableName: React.PropTypes.string.isRequired,
    tableHeaders: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired
      })
    ),
    question: React.PropTypes.string.isRequired
  },

  getInitialState: function () {
    return {
      coloredCode: null,
      goodsArray: this.props.goodsArray
    };
  },

  rowSelected: function (code) {
    this.setState({ coloredCode: code })
  },

  deleteRow: function (code) {
    let answer = confirm(this.props.question);
    if (answer) {
      let filteredArray = this.state.goodsArray.filter(element => element.code !== code);
      this.setState({ goodsArray: filteredArray })
    }
  },

  render: function () {
    var goods = this.state.goodsArray.map(good =>
      React.createElement(GoodItem, {
        key: good.code,
        code: good.code,
        name: good.name,
        cost: good.cost,
        goodUrl: good.goodUrl,
        pictureName: good.pictureName,
        numbers: good.numbers,
        rowWasSelected: this.rowSelected,
        isSelected: this.state.coloredCode === good.code ? true : false,
        deleteSelecredRow: this.deleteRow
      }),
    );
    var headers = this.props.tableHeaders.map(header =>
      React.DOM.th({ key: header.id, className: 'TableHeader' }, header.name)
    );

    return React.DOM.table({ className: 'GoodsList' },
      React.DOM.caption({ className: 'ListCaption' }, this.props.tableName),
      React.DOM.thead({},
        React.DOM.tr({}, headers)
      ),
      React.DOM.tbody({}, goods)
    );
  },

});