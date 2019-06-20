
import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

const BR2JSX = (props) => {
    const textArray = props.text.match(/[а-я]+/g);
    const mas = [];
    textArray.forEach((element, i) => {
        if (i + 1 === textArray.length) {
            mas.push(element)
        } else {
            mas.push(element, <br key={i + 1} />)
        }
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