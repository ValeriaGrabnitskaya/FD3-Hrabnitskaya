import React from 'react';
import PropTypes from 'prop-types';

import modes from '../../static-data/mode';

class AddEditClient extends React.PureComponent {
    static propTypes = {
        mode: PropTypes.number.isRequired
    };

    state = {};

    render() {

        return (
            <div className='ClientBlock'>
                {
                    (this.props.mode === modes.add) && <h1>Add new client</h1>
                }
                {
                    (this.props.mode === modes.edit) && <h1>Edit {this.props.initialGoodName}</h1>
                }
                <div className='InputBlock'>
                    <label className='BlockLabels'>
                        First name:
                            <input className='BlockInput' type='text' value={this.state.link} />
                    </label>
                    <label className='BlockLabels'>
                        Second name:
                            <input className='BlockInput' type='text' value={this.state.name} />
                    </label>
                    <label className='BlockLabels'>
                        Last name:
                            <input className='BlockInput' type='text' value={this.state.cost} />
                    </label>
                    <label className='BlockLabels'>
                        Balance:
                            <input className='BlockInput' type='number' value={this.state.numbers} />
                    </label>
                </div>
                <div className='ButtonBlock'>
                    <input className='Button' type='button' value='Save' onClick={this.onSaveClient} />
                    <input className='Button' type='button' value='Cancel' onClick={this.onCancelSave} />
                </div>
            </div>
        )
    }
}

export default AddEditClient;