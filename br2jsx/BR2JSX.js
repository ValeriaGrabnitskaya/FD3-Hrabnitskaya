
import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

const BR2JSX = (props) => {
    const textArray = props.text.match(/[а-я]+/g);
    const mas = [];
    textArray.forEach((element, i) => {
        if (i) {
            mas.push(<br key={i} />);
        }
        mas.push(element);
    });
    return (
        <div className='Block'>
            {mas}
        </div>
    )
}

BR2JSX.propTypes = {
    text: PropTypes.string.isRequired
}

export default BR2JSX;