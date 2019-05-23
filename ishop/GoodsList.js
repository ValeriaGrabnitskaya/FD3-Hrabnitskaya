var GoodsList = React.createClass({

  displayName: 'GoodsList',

  propTypes: {
    tableName: React.PropTypes.string.isRequired,
    goodsArray:React.PropTypes.arrayOf(
      React.PropTypes.shape({
      code: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      cost: React.PropTypes.number.isRequired,
      goodUrl: React.PropTypes.string.isRequired,
      pictureName: React.PropTypes.string.isRequired,
      numbers: React.PropTypes.number.isRequired
      })
    )
  },

  render: function() {

    var goods=this.props.goodsArray.map( good =>
      React.DOM.tr({key:good.code},
        React.DOM.td({className:'GoodItem'},good.name),
        React.DOM.td({className:'GoodItem'},good.cost),
        React.DOM.td({className:'GoodItem'},
        React.DOM.img({className:'GoodImage', src:good.goodUrl, alt: good.pictureName}) 
        ),
        React.DOM.td({className:'GoodItem'},good.numbers),
      )
    );
    return React.DOM.table({className:'GoodsList'}, 
      React.DOM.caption( {className:'ListCaption'}, this.props.tableName ),
      React.DOM.tr( {},
        React.DOM.th( {className:'TableHeader'}, this.props.tableHeaders.headerName),
        React.DOM.th( {className:'TableHeader'}, this.props.tableHeaders.headerCost),
        React.DOM.th( {className:'TableHeader'}, this.props.tableHeaders.headerPicture),
        React.DOM.th( {className:'TableHeader'}, this.props.tableHeaders.headerNumbers),
      ),
      React.DOM.tbody({}, goods),
    );
  },

});