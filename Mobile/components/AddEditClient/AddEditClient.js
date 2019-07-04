import React from 'react';
import PropTypes from 'prop-types';

import modes from '../../static-data/mode';

class AddEditClient extends React.PureComponent {
    static propTypes = {
        mode: PropTypes.number.isRequired
    };

    state = {};

    render() {
        <div className='GoodBlock'>
            {
                (this.props.mode === modes.add) && <h1>Add new client</h1>
            }
            {
                (this.props.mode === modes.edit) && <h1>Edit {this.props.initialGoodName}</h1>
            }
            {/* <div className='InputBlock'>
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
                    className='Button'
                    disabled={isDisable}
                    type='button'
                    value='Save'
                    onClick={this.onSaveGood} />
                <input className='Button' type='button' value='Cancel' onClick={this.onCancelSave} />
            </div> */}
        </div>
    }
}

export default AddEditClient;