import React from 'react';
import PropTypes from 'prop-types';

import './AddEditGood.css';

class AddEditGood extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.selectedGood)
        this.state = {
            code: props.selectedGood ? props.selectedGood.code : 5,
            link: '',
            name: '',
            cost: 0,
            numbers: 0,
            isLinkValid: false,
            isNameValid: false,
            isCostValid: false,
            isNumbersValid: false
        }
    }

    onLinkChanged = (e) => {
        let link = e.target.value;
        this.setState({ link: link, isLinkValid: link !== '' })
        this.props.formChanged()
    }

    onNameChanged = (e) => {
        let name = e.target.value;
        this.setState({ name: name, isNameValid: name !== '' })
        this.props.formChanged()
    }

    onCostChanged = (e) => {
        let cost = +e.target.value;
        this.setState({ cost: cost, isCostValid: cost > 0 })
        this.props.formChanged()
    }

    onNumbersChanged = (e) => {
        let numbers = +e.target.value;
        this.setState({ numbers: numbers, isNumbersValid: numbers > 0 })
        this.props.formChanged()
    }

    onSaveGood = () => {
        let newGood = {
            code: this.state.code,
            name: this.state.name,
            cost: this.state.cost,
            goodUrl: this.state.link,
            numbers: this.state.numbers
        }
        this.props.saveGood(newGood);
    }

    onCancelSave = () => {
        this.props.cancelGood();
    }

    render() {
        return (
            <div>
                <div className='GoodBlock'>
                    <p>Code: {this.state.code}</p>
                    <p>Link: <input type='text' value={this.state.link} onChange={this.onLinkChanged} /> {(!this.state.isLinkValid) && <span>Field is required</span>}</p>
                    <p>Name: <input type='text' value={this.state.name} onChange={this.onNameChanged} /> {(!this.state.isNameValid) && <span>Field is required</span>}</p>
                    <p>Cost: <input type='number' value={this.state.cost} onChange={this.onCostChanged} /> {(!this.state.isCostValid) && <span>Field is required</span>}</p>
                    <p>Numbers: <input type='number' value={this.state.numbers} onChange={this.onNumbersChanged} /> {(!this.state.isNumbersValid) && <span>Field is required</span>}</p>
                </div>
                <div>
                    <input className='Button FirstChild' type='button' value='Save' onClick={this.onSaveGood} />
                    <input className='Button' type='button' value='Cancel' onClick={this.onCancelSave} />
                </div>
            </div>
        )
    }
}

AddEditGood.propTypes = {
    selectedGood: PropTypes.object,
    mode: PropTypes.number.isRequired,
    saveGood: PropTypes.func.isRequired,
    cancelGood: PropTypes.func.isRequired,
    formChanged: PropTypes.func.isRequired,
    selectedGood: PropTypes.object
}

export default AddEditGood;