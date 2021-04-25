import React, { useState } from 'react';

function JeopardyBox(props) {
    
    const [bgColor, setBgColor] = useState("white");

    const [popup, setPopup] = useState(false);

    const handleClick = () => {
        if (!popup) {
            document.getElementById('popup').classList.add('active');
            document.getElementById('popup').classList.remove('inactive');
            document.getElementById('question').innerHTML = props.question;
            setPopup(true);
            setBgColor("yellow");
            
        }
        setPopup(false);
    }

    return (
        <button className={`gameSquare-${props.cName}`} 
                onClick={handleClick}
                style={({backgroundColor:bgColor})}>
            <span>{props.children}</span>
        </button>
    );
}

export default JeopardyBox;