import React, { useState } from 'react';
import './Size.scss';

export const Size = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div className="container">
            <div className="title">Size</div>
            <div className="size">
                <button className={`size-card ${activeButton === 'button1' ? 'active' : ''}`} onClick={() => handleButtonClick('button1')}>250gm</button>
                <button className={`size-card ${activeButton === 'button2' ? 'active' : ''}`} onClick={() => handleButtonClick('button2')}>500gm</button>
                <button className={`size-card ${activeButton === 'button3' ? 'active' : ''}`} onClick={() => handleButtonClick('button3')}>1000mg</button>
            </div>
        </div>
    );
}
    //  const changeColor = (button) => {
    //     // Implement your color change logic here
    //     // Example:
    //     // const newStyles = { backgroundColor: 'red' };
    //     // setButtonStyles(prevStyles => ({ ...prevStyles, [button]: newStyles }));
    // };
    //   const getStyle = (button) => {
    //     // Implement your style retrieval logic here
    //     // Example:
    //     // return buttonStyles[button];
    // };