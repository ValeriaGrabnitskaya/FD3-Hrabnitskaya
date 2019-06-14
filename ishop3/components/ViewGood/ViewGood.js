import React from 'react';
import PropTypes from 'prop-types';

import './ViewGood.css';

class ViewGood extends React.Component {

    render() {
        const good = this.props.good;
        return (
            <div className='GoodBlock'>
                <h1>{good.name}</h1>
                <p><span>Code</span>: <span>{good.code}</span></p>
                <p><span>Link</span>: <span>{good.goodUrl}</span></p>
                <p><span>Name</span>: <span>{good.name}</span></p>
                <p><span>Cost</span>: <span>{good.cost}</span> BYN</p>
                <p><span>Numbers</span>: <span>{good.numbers}</span></p>
            </div>
        )
    }
}

ViewGood.propTypes = {
    good: PropTypes.object
}

export default ViewGood;