import React from 'react';

function JeopardyBox(props) {
    return (
        <button className={`gameSquare-${props.cName}`}>
            <span>{props.children}</span>
        </button>
    );
}

export default JeopardyBox;