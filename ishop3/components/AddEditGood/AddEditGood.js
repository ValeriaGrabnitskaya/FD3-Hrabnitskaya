import React from 'react';
import PropTypes from 'prop-types';

import './AddEditGood.css';

class AddEditGood extends React.Component {

    onLinkChanged = (e) => {
        let link = e.target.value;
    }

    onNameChanged = (e) => {
        let name = e.target.value;
    }

    onCostChanged = (e) => {
        let cost = e.target.value;
    }

    onNumbersChanged = (e) => {
        let numbers = +e.target.value;
    }

    render() {
        return (
            <div className='GoodBlock'>
                <p><span>Link</span>: <input onChange={this.onLinkChanged}/></p>
                <p><span>Name</span>: <input onChange={this.onNameChanged}/></p>
                <p><span>Cost</span>: <input onChange={this.onCostChanged}/></p>
                <p><span>Numbers</span>: <input onChange={this.onNumbersChanged}/></p>
            </div>
        )
    }
}

AddEditGood.propTypes = {
}

export default AddEditGood;