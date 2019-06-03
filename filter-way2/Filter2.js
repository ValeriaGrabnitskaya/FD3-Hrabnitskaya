var Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        textArray: React.PropTypes.arrayOf(React.PropTypes.string)
    },

    getInitialState: function () {
        return {
            textArray: this.props.textArray,
            isChecked: false,
            inputText: ''
        };
    },

    changeTextArray() {
        let changedText = this.props.textArray;
        if (this.state.inputText) {
            changedText = changedText.filter(element => element.includes(this.state.inputText))
        }
        if (this.state.isChecked) {
            changedText = changedText.slice().sort();
        }
        this.setState({ textArray: changedText })
    },

    checkboxClicked: function (e) {
        this.setState({ isChecked: e.target.checked }, this.changeTextArray)
    },

    inputChanged: function (e) {
        this.setState({ inputText: e.target.value }, this.changeTextArray)
    },

    buttonClicked: function (e) {
        this.setState({ isChecked: false, inputText: '', textArray: this.props.textArray })
    },

    render: function () {
        return React.DOM.div({ className: 'FilterBlock' },
            React.DOM.input({
                type: 'checkbox', className: 'FilterCheckbox',
                checked: this.state.isChecked,
                onClick: this.checkboxClicked
            }),
            React.DOM.input({
                type: 'text', className: 'FilterInput', value: this.state.inputText,
                onChange: this.inputChanged
            }),
            React.DOM.input({
                type: 'button', value: 'сброс', className: 'FilterResetBtn',
                onClick: this.buttonClicked
            }),
            React.DOM.div({ className: 'FilterText' }, this.state.textArray)
        );
    },

});