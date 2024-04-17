import React from 'react';
import '/src/pages/product/beans/size/Size.scss'

export const Size = () => {
  // const [buttonStyles, setButtonStyles] = useState({
  //       button1: {},
  //       button2: {},
  //       button3: {}
  //   });
  //    const changeColor = (button) => {
  //       // Implement your color change logic here
  //       // Example:
  //       // const newStyles = { backgroundColor: 'red' };
  //       // setButtonStyles(prevStyles => ({ ...prevStyles, [button]: newStyles }));
  //   };
  //     const getStyle = (button) => {
  //       // Implement your style retrieval logic here
  //       // Example:
  //       // return buttonStyles[button];
  //   };
    return (
        <div className="container">
            <div className="title">Size</div>
            <div className="size">
                <button className="card" onClick={() => ('button1')}>S</button>
                <button className="card" onClick={() => ('button2')}>M</button>
                <button className="card" onClick={() => ('button3')}>L</button>
            </div>
        </div>
    );
}
