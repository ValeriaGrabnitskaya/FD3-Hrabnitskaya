import React from 'react';

import './RainbowFrame.css';

const getDiv = (color, i, children) => {
    return <div key={i} style={{ border: "solid 3px " + color, padding: "10px", textAlign: "center" }}>{children}</div>
}

const withRainbowFrame = colors => Fragment => props => {
    let divBlock = props.children;
    colors.forEach((color, i) => {
        divBlock = getDiv(color, i, divBlock)
    });
    return (
        <Fragment>
            <div className="DivBlock">
                {divBlock}
            </div>
        </Fragment>
    )
}


export { withRainbowFrame }