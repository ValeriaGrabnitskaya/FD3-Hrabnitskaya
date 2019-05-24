var GoodsList = React.createClass({

  displayName: 'GoodsList',

  propTypes: {
    tableName: React.PropTypes.string.isRequired,
    goodsArray: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        cost: React.PropTypes.number.isRequired,
        goodUrl: React.PropTypes.string.isRequired,
        pictureName: React.PropTypes.string.isRequired,
        numbers: React.PropTypes.number.isRequired
      })
    ),
    tableHeaders: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        headerCode: React.PropTypes.number.isRequired,
        headerName: React.PropTypes.string.isRequired,
        headerCost: React.PropTypes.string.isRequired,
        headerPicture: React.PropTypes.string.isRequired,
        headerNumbers: React.PropTypes.string.isRequired
      })
    )
  },

  render: function () {

    var goods = this.props.goodsArray.map(good =>
      React.DOM.tr({ key: good.code },
        React.DOM.td({ className: 'GoodItem' }, good.name),
        React.DOM.td({ className: 'GoodItem' }, good.cost),
        React.DOM.td({ className: 'GoodItem' },
          React.DOM.img({ className: 'GoodImage', src: good.goodUrl, alt: good.pictureName })
        ),
        React.DOM.td({ className: 'GoodItem' }, good.numbers),
      )
    );
    var headers = this.props.tableHeaders.map(header =>
      React.DOM.tr({ key: header.headerCode },
        React.DOM.th({ className: 'TableHeader' }, header.headerName),
        React.DOM.th({ className: 'TableHeader' }, header.headerCost),
        React.DOM.th({ className: 'TableHeader' }, header.headerPicture),
        React.DOM.th({ className: 'TableHeader' }, header.headerNumbers),
      )
    );

    return React.DOM.table({ className: 'GoodsList' },
      React.DOM.caption({ className: 'ListCaption' }, this.props.tableName),
      React.DOM.thead({}, headers),
      React.DOM.tbody({}, goods)
    );
  },

});