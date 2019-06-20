
import React from 'react';
import PropTypes from 'prop-types';

const BR2JSX = (props) => {
    const textArray = props.text.match(/[а-я]+/g);

    const mapTextArray = ["первый", <br />, "второй"];

    return (
        <div>
            {mapTextArray}
        </div>
    )
}

BR2JSX.propTypes = {
    text: PropTypes.string.isRequired
}

export default BR2JSX;