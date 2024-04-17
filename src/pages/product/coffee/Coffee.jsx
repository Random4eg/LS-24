import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '/src/pages/product/coffee/Coffee.scss'
import { Description } from './description/Description';
import { Size } from './size/Size';
import { Price } from './price/Price';

export const Coffee = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="coffee-section">
        <div className="coffee-box">
          <button className="coffee-icon icon-chevron-left" onClick={goBack}></button>
          <button className="coffee-icon icon-heart"></button>
        </div>
        <div className="parent">
          <div className="div1">
            Cappuccino <br/>
            <p>With Steamed Milk</p>
          </div>
          <div className="div2">
            <div className="icon-coffee_2"><br/>Cappuccino</div>
          </div>
          <div className="div3">
            <div className="icon-water"><br/>Milk</div>
          </div>
          <div className="div4">
            <p className="icon-star price">4.5 <span>(6,879)</span></p>
          </div>
          <div className="div5">Medium Roasted</div>
        </div>
      </div>
      <Description />
      <Size />
      <Price />
    </>
  );
};