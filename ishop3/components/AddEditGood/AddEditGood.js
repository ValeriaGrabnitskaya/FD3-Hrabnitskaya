import React from 'react';
import PropTypes from 'prop-types';

import './AddEditGood.css';
import modes from '../../static-data/mode';

class AddEditGood extends React.Component {

    constructor(props) {
        super(props);

        let isEditMode = props.mode === modes.edit;

        this.state = {
            initialEditName: props.selectedGood.name,
            code: props.selectedGood.code,
            link: isEditMode ? props.selectedGood.goodUrl : '',
            name: isEditMode ? props.selectedGood.name : '',
            cost: isEditMode ? props.selectedGood.cost : 0,
            numbers: isEditMode ? props.selectedGood.numbers : 0,
            isLinkValid: isEditMode,
            isNameValid: isEditMode,
            isCostValid: isEditMode,
            isNumbersValid: isEditMode
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
        let isDisable = !this.state.isLinkValid || !this.state.isNameValid || !this.state.isCostValid || !this.state.isNumbersValid;
        return (
            <div className='GoodBlock'>
                {
                    (this.props.mode === modes.add) && <h1>Add new good</h1>
                }
                {
                    (this.props.mode === modes.edit) && <h1>Edit {this.props.initialGoodName}</h1>
                }
                <div className='InputBlock'>
                    <label className='BlockLabels'>
                        Code:
                            <span className='BlockInput'>{this.state.code}</span>
                    </label>
                    <label className='BlockLabels'>
                        Link:
                            <input className='BlockInput' type='text' value={this.state.link} onChange={this.onLinkChanged} />
                        {(!this.state.isLinkValid) && <span className='BlockMessage'>Field is required</span>}
                    </label>
                    <label className='BlockLabels'>
                        Name:
                            <input className='BlockInput' type='text' value={this.state.name} onChange={this.onNameChanged} />
                        {(!this.state.isNameValid) && <span className='BlockMessage'>Field is required</span>}
                    </label>
                    <label className='BlockLabels'>
                        Cost:
                            <input className='BlockInput' type='text' value={this.state.cost} onChange={this.onCostChanged} />
                        {(!this.state.isCostValid) && <span className='BlockMessage'>Field is required</span>}
                    </label>
                    <label className='BlockLabels'>
                        Numbers:
                            <input className='BlockInput' type='text' value={this.state.numbers} onChange={this.onNumbersChanged} />
                        {(!this.state.isNumbersValid) && <span className='BlockMessage'>Field is required</span>}
                    </label>
                </div>
                <div className='ButtonBlock'>
                    <input
                        className={isDisable ? 'Disable' : 'Button'}
                        type='button'
                        value='Save'
                        disabled={isDisable}
                        onClick={this.onSaveGood} />
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
    initialGoodName: PropTypes.string
}

export default AddEditGood;