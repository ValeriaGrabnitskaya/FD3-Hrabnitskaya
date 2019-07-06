import React from 'react';
import PropTypes from 'prop-types';

import modes from '../../static-data/mode';
import clientStatuses from './../../static-data/client-statuses';
import { companyEvents } from '../events';
import './AddEditClient.css';

class AddEditClient extends React.PureComponent {
    static propTypes = {
        mode: PropTypes.number.isRequired,
        client: PropTypes.object
    };

    state = {
        generatedId: 5
    };

    firstNameRef = null;
    secondNameRef = null;
    lastNameRef = null;
    balanceRef = null;

    setFirstName = (ref) => {
        this.firstNameRef = ref;
    }

    setSecondName = (ref) => {
        this.secondNameRef = ref;
    }

    setLastName = (ref) => {
        this.lastNameRef = ref;
    }

    setBalance = (ref) => {
        this.balanceRef = ref;
    }

    onSaveClient = () => {
        console.log('....save....')
        if (this.firstNameRef && this.secondNameRef && this.lastNameRef && this.balanceRef) {
            var client = {
                ...this.props.client,
                id: this.props.client ? this.props.client.id : this.state.generatedId,
                firstName: this.firstNameRef.value,
                secondName: this.secondNameRef.value,
                lastName: this.lastNameRef.value,
                balance: +this.balanceRef.value,
                status: +this.balanceRef.value > 0 ? clientStatuses.Active : clientStatuses.Blocked
            }
            console.log('....save....')
            companyEvents.emit('SaveClient', client);
            if (this.props.mode === modes.add) {
                this.setState({ generatedId: this.state.generatedId + 1 })
            }
        }
    }

    onCancelSave = () => {
        this.firstNameRef.value = null;
        this.secondNameRef.value = null;
        this.lastNameRef.value = null;
        this.balanceRef.value = null;
        companyEvents.emit('CancelSaveClient');
    }

    render() {
        console.log("AddEditClient render");

        return (
            <div className='ClientBlock'>
                {
                    (this.props.mode === modes.add) && <h1>Add new client</h1>
                }
                {
                    (this.props.mode === modes.edit) && <h1>Edit {this.props.initialGoodName}</h1>
                }
                <div key={this.props.client ? this.props.client.id : this.state.generatedId} className='InputBlock'>
                    <label className='BlockLabels'>
                        First name:
                            <input
                            id="firstName"
                            className='BlockInput'
                            defaultValue={this.props.client ? this.props.client.firstName : ""}
                            type='text'
                            ref={this.setFirstName} />
                    </label><br />
                    <label className='BlockLabels'>
                        Second name:
                            <input
                            id="secondName"
                            className='BlockInput'
                            defaultValue={this.props.client ? this.props.client.secondName : ""}
                            type='text'
                            ref={this.setSecondName} />
                    </label><br />
                    <label className='BlockLabels'>
                        Last name:
                            <input
                            id="lastName"
                            className='BlockInput'
                            defaultValue={this.props.client ? this.props.client.lastName : ""}
                            type='text'
                            ref={this.setLastName} />
                    </label><br />
                    <label className='BlockLabels'>
                        Balance:
                            <input
                            id="balance"
                            className='BlockInput'
                            defaultValue={this.props.client ? this.props.client.balance : ""}
                            type='number'
                            ref={this.setBalance} />
                    </label><br />
                </div>
                <div className='ButtonBlock'>
                    <input className='Button' id='saveBtn' type='button' value='Save' onClick={this.onSaveClient} />
                    <input className='Button' type='button' value='Cancel' onClick={this.onCancelSave} />
                </div>
            </div>
        )
    }
}

export default AddEditClient;